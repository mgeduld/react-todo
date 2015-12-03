var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Basic React Project',
    template: 'src/index-template.html',
    inject: 'body'
  })]
};

module.exports = config;
