const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FeelesWebpackPlugin = require('./feeles-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const cdn = 'https://assets.feeles.com/public/v1114/h4p.js';
const port = process.env.PORT || 8082;
const dist = 'public/';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(dist),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.(html|hbs)$/,
				loaders: ['handlebars-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			filename: 'ja/index.html',
			template: 'template/ja.hbs',
			cdn
		}),
		new FeelesWebpackPlugin({
			paths: ['src/ja'],
			output: 'ja/hack-rpg.json',
			ignore: /\.DS_Store$/
		}),
		new HtmlWebpackPlugin({
			inject: false,
			filename: 'en/index.html',
			template: 'template/en.hbs',
			cdn
		}),
		new FeelesWebpackPlugin({
			paths: ['src/en', 'src/ja'],
			output: 'en/hack-rpg.json',
			ignore: /\.DS_Store$/
		}),

		// https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b
		new webpack.optimize.ModuleConcatenationPlugin(),

		new OpenBrowserPlugin({ url: `http://localhost:${port}/ja/` })
	],
	devServer: {
		contentBase: dist,
		port,
		// https://github.com/webpack/webpack-dev-server/issues/882
		// ngrok で https のテストをするとき "Invalid Host header" になるので.
		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*'
		}
	}
};
