/**
 * TEST webpack config
 */

var webpack = require('webpack');
var extractTxtPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	context: __dirname + '/app',
	entry: {
		app: './app.js',
		vendor: ['angular']
		// moment: ['moment']
	},
	output: {
		path: __dirname + '/js',
		filename: '[name]-bundle.[chunkhash].js'
	},
	module:{
		rules:[
			{
				// use: ['style-loader', 'css-loader'],
				use: extractTxtPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
					//publicPath: __dirname + '/css'
				}),
				test: /\.s?css$/
			}
			//for sass files
			// {
			// 	test: /\.scss$/,
			// 	use: [{
	  //               loader: "style-loader" // creates style nodes from JS strings
	  //           }, {
	  //               loader: "css-loader" // translates CSS into CommonJS
	  //           }, {
	  //               loader: "sass-loader" // compiles Sass to CSS
	  //           }]
			// }
		]
	},
	plugins: [
	new extractTxtPlugin('../css/index-final.css'),
	// new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js")]
	// new webpack.optimize.UglifyJsPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		// name:"vendor", filename:"vendor.bundle.js"
		names: ['vendor', 'manifest']
	}),
	new htmlWebpackPlugin({
		template: '../index.test.html'
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	})
	// new webpack.optimize.CommonsChunkPlugin({name:"moment", filename:"moment.bundle.js"})
]
	
};
