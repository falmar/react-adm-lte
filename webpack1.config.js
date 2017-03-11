var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

var suffix = debug ? '' : '.min'
var filename = 'react-adm-lte' + suffix + '.js'

module.exports = {
  target: 'node',
  devtool: debug
        ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015', 'stage-0'
          ],
          plugins: [
            'transform-react-constant-elements',
            'transform-react-inline-elements'
          ]
        }
      }, {
        test: /\.css$/,
        loader: 'style!css!'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    // target
    libraryTarget: 'commonjs',
    // output path
    path: path.join(__dirname, 'dist'),
    // output file
    filename: filename
  },
  plugins: debug
        ? [
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
          })
        ] : [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
              warnings: false
            }
          }),
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          })
        ]
}
