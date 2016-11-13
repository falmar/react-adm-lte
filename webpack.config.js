var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

module.exports = {
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
        // output path
    path: path.join(__dirname, 'public'),
        // output file
    filename: 'app.min.js'
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
