const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),//html模板
  ExtractTextPlugin = require("extract-text-webpack-plugin"),//分离css
  uglify = require('uglifyjs-webpack-plugin');//压缩js  自带的
const webpack = require('webpack');
//ModuleConcatenationPlugin = new webpack.optimize.ModuleConcatenationPlugin();//scope hosting
//new webpack.optimize.CommonsChunkPlugin 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        }),
        // loader:['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new ExtractTextPlugin("styles.css"),
    new uglify(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    })
  ]
};