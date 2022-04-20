module.exports = {
	mode: "production",
	entry: {
		cdn: "./src/index.cdn.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "DrawModeModify.[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	}
}