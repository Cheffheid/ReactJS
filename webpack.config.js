/* eslint-env node */
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{ test: /\.svg$/, use: 'svg-inline-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.(js)$/, use: 'babel-loader' }
		]
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'index_bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin( {
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		} )
	],
	mode: 'production' === process.env.NODE_ENV ? 'production' : 'development'
};
