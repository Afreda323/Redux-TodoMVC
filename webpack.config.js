var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "eval",
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
           test: /\.js$/,
           use: 'babel-loader'
       }
     ]
   },
   plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
      template: './index.html'
    })]
};