const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = [];
var devPlugins = [];

var prodPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),
	new UglifyJsPlugin({
		cache: true,
		parallel: true,
		uglifyOptions: {
			compress: false,
			ecma: 6,
			mangle: true
		},
		sourceMap: true
	})
];

plugins = plugins.concat(
	process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
	mode: 'none',
	context: __dirname,
	entry: {
		index: './frontend/index.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: '[name].bundle.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	plugins: plugins,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	}
};
