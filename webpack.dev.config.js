const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const autoprefixer = require('autoprefixer')
const localEnv = require('./.env.json')

const env = Object.assign({}, localEnv, { NODE_ENV: 'development' })

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './app/js/main'
  ],
  output: {
    filename: 'app.js?[hash]',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        env: {
          development: {
            plugins: [
              ['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react']
                }]
              }],
              ['react-intl', {
                messagesDir: './build/messages/'
              }]
            ]
          }
        }
      }
    },{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(env).reduce((o, k) =>
        Object.assign({}, o, { [k]: JSON.stringify(env[k]) })
      , {})
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ template: 'app/index-template.html' }),
    new NyanProgressPlugin()
  ],
  modulesDirectories: ['node_modules'],
  eslint: {
    configFile: '.eslintrc'
  }
}
