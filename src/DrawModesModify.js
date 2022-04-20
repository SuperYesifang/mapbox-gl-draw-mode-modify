import * as CommonSelectors from '@mapbox/mapbox-gl-draw/src/lib/common_selectors';
import createSupplementaryPoints from '@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points';
import * as Constants from '@mapbox/mapbox-gl-draw/src/constants';

let defaultOpts = {
	editable: true,
	selectable: true,
	draggable: true,
	adjustable: true,
	focus: true
}
let featureCollection = [];
function DrawModesModify(modes, opts = {}) {
	if(!modes) return;
	opts = { ...defaultOpts, ...opts};

	function toDisplayFeatures(state, geojson, display) {
		geojson.properties.active = (this.isSelected(geojson.properties.id)) ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
		if (!opts.focus && featureCollection.indexOf(geojson.properties.id) == -1) {
			geojson.properties.active = "false";
			this.deselect(geojson.properties.id)
			featureCollection.push(geojson.properties.id);
		}
		display(geojson);
		this.fireActionable();
		if (geojson.properties.active !== Constants.activeStates.ACTIVE || geojson.geometry.type === Constants.geojsonTypes.POINT) return; // 如果当前图形未选中，或选中的是一个点图形，则return
		if (opts.editable && opts.adjustable) createSupplementaryPoints(geojson).forEach(display); // 给每条线中间绘制一个可编辑点
	};

	function onSimpleDrag(state, e) {
		if(!opts.draggable) return;
		if (state.canDragMove) return this.dragMove(state, e);
		if (this.drawConfig.boxSelect && state.canBoxSelect) return this.whileBoxSelect(state, e);
	}

	function onDirectDrag(state, e) {
		if(!opts.draggable && !state.selectedCoordPaths.length && featureCollection.indexOf(state.featureId) !== -1) return;
		if (!state.canDragMove) return;
		state.dragMoving = true;
		e.originalEvent.stopPropagation();
		const delta = {
			lng: e.lngLat.lng - state.dragMoveLocation.lng,
			lat: e.lngLat.lat - state.dragMoveLocation.lat
		};
		if (state.selectedCoordPaths.length > 0) this.dragVertex(state, e, delta);
		else this.dragFeature(state, e, delta);

		state.dragMoveLocation = e.lngLat;
	}

	function onTapOrClick(state, e) {
		if (!opts.selectable || CommonSelectors.noTarget(e)) return this.clickAnywhere(state);
		if (opts.editable && opts.adjustable && CommonSelectors.isOfMetaType(Constants.meta.VERTEX)(e)) return this.clickOnVertex(state, e);
		if (opts.selectable) {
			if (!opts.adjustable && this.isSelected(e.featureTarget.properties.id)) return;
			if (CommonSelectors.isFeature(e))this.clickOnFeature(state, e);
		}
	}; 

	modes.simple_select.onDrag = onSimpleDrag;
	modes.direct_select.onDrag = onDirectDrag;
	modes.simple_select.onTap = modes.simple_select.onClick = onTapOrClick;
	modes.simple_select.toDisplayFeatures = toDisplayFeatures;

	return modes;
}

export default DrawModesModify;