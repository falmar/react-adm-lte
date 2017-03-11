var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-adm-lte.js',
    library: 'ReactADMLTE',
    libraryTarget: 'commonjs-module'
  },
  externals: {
    'react': 'React'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
