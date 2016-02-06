const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: ['babel-polyfill', './app/js/main'],
  output: {
    filename: 'app.js?[hash]',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_ROOT']),
    new ExtractTextPlugin('[name].css?[contenthash]', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({ template: 'app/index-template.html' })
  ],
  modulesDirectories: ['node_modules']
}
