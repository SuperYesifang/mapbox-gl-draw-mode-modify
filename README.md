# mapbox-gl-draw-modes-modify

![mapbox-gl-draw-modes-modify](https://img.shields.io/badge/mapbox--gl--draw--modes--modify-v1.0.0-%23C50008?logo=npm)
![nodejs](https://img.shields.io/badge/nodejs-lts--v14.x-%23036200?logo=nodedotjs)
[![blog](https://img.shields.io/badge/blog-yesifang.com-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAIAQUiBhQVBA05CyK0I2z4MJTgKoV8GEoKAgZyFkT8MZfTKX4dBRFWEDP9MZfMJ3kGAQQHAQTlK4htFUEAHRMATDAAbUQAf1EAh1QAgFAAbUUATDAAHhNMDy7KJngAeUsAKBp9GEr4MJMDAQIAmWEAWzkABAOGGlD9MZYAcUgABQNoFD7mLIoAZUCdHl4ANiKiH2EpCBgAh1UAAgERAwrVKH9nFD0ALBwSAwuqIWXmK4pTEDIAWTgrCBp2F0eVHVmKG1NWETMAdEgAgVAAAQIAJTcATXIAZJQAbqUAap0AVoEAfE4AAQEAN1EAgMAAaEIACQ4Aap4ARiwACQ0AebMAmV8AEwwAAAAAZ5oAZT8AMkkAkFoAEQsAebMAl14AGCQAkl0ALx4AOlYAeEsAGRAATHAAbkUAll0All4AbkYAMB4ATXMABwQAIxYANiIAPicANyIAJBYAQF4AIjIAis0AAgMAhsYAZJYARWYAk9oAHy4ABQcAfbkAO1gAis3/MZgAmmEAld3///8EabibAAAAgHRSTlMACCIVObX54XwKcv3UHVb+zQYH5m0xfrTU4NW1fzJMy8hDffkD/pcHh/69CGjnqJ5ZoynfBBHWZ0kSqudTlCt2lotWwNUCQIOrvrWVzwFe3a4QtnQPz/0gAbKnVe4c0Psp9E9jximBtvj4t0+FCzpaZlo7bTruA+Wtdfs1CNdm7ZpKyEIAAAABYktHRIP8tM/SAAAAB3RJTUUH5QoVBh0NInrzjgAAATtJREFUOMt902VbwzAUBeDLcAYMhru7uzPcXYcP1+EyPMkvZ03TNk0TztfzNnL7BECeCFck/JOo6BiEYuPiVX2CG9EkJsn7ZA9iSUmV9d40ZCYdICMzKzsnNy+/wASFVo+KALCR4hIGSjlQVm4BXFFZRUE1B2q8HMC4tk4D9RxoABvAjRpwuS3QJADcrIkW6witImhrD4OOTtZ7ukAEuFtboqeXjqqvH5xgQL/qoG9oeET/FQIYdQxWAGNmMT4xOTU9MyuCOVbPLywSGhEs6f3yCiFysEr7tXWiABubWu/fIiqwTRfYISqwu0fBvgoc0DlCgCjA4ZF+hWMFODllMzizgfML2l5eXfuNGd7YAARv7+4fHoPc9J/swJlnrn+Rgdc3C4SkT+vd7D8+peDr2+h/FK838Ev3D4W//wNiKCWwWalJAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yMVQwNjoyOToxMyswMDowMP1Zb/cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjFUMDY6Mjk6MTMrMDA6MDCMBNdLAAAAAElFTkSuQmCC)](//yesifang.com)

> 这是一个mapbox-gl-draw的绘图模式个性化修改器。在原有模式上增添了许多方便实用的功能。
>
> This is a mapbox-gl-draw drawing modes personalization modifier. Many convenient and practical functions have been added to the original model.

<div align="center">
  <a href="https://nodei.co/npm/mapbox-gl-draw-modes-modify/"><img src="https://nodei.co/npm/mapbox-gl-draw-modes-modify.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## Run Simple Demo

```shell
$ git clone https://github.com/SuperYesifang/mapbox-gl-draw-modes-modify.git
$ cd mapbox-gl-draw-modes-modify
$ npm run serve
```



## Usage

`DrawModesModify(MapboxDraw.modes, options?)`

### 1. Use CDN

```html
<script src="https://raw.githubusercontent.com/SuperYesifang/mapbox-gl-draw-modes-modify/master/dist/DrawModesModify.cdn.js"></script>
```



### 2. Use ESM

```js
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import DrawModesModify from "mapbox-gl-draw-modes-modify";

const draw = new MapboxDraw({
    modes: DrawModesModify(MapboxDraw.modes, {
        editable: false
    })
});

map.addControl(draw);
```



## Options

| prop         | type      | description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| `editable`   | `boolean` | Whether the drawing can be re-edited. default: `true`.       |
| `selectable` | `boolean` | Whether the drawing you have drawn can be selected. default: `true.` |
| `draggable`  | `boolean` | Whether the drawing can be dragged and moved. default: `true`. |
| `adjustable` | `boolean` | Whether the drawn graph can reposition the vertex. defualt : `true`. |
| `focus`      | `boolean` | Whether to retain the focus of the graphic after the drawing is completed. default: `true.` |

