var webpack = require('webpack')
var path = require('path')
var debug = process.env.NODE_ENV !== 'production'

var filename = debug ? 'react-adm-lte.js' : 'react-adm-lte.min.js'

module.exports = {
  target: 'node',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename,
    libraryTarget: 'commonjs'
  },

  externals: {
    'react': {
      commonjs: 'react'
    }
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: false
    })
  ]
}
