const webpack = require('webpack');
const OpenBrowserPlugin=require('open-browser-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CommonsChunkPlugin=require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
  entry: ['./index.jsx'],//已多次提及的唯一入口文件
  output: {
    path: __dirname,
    filename: "./main.js"
  },
 resolve: {
    extensions: [ '.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./", 
    colors: true, 
    historyApiFallback: true, 
    inline: true, 
    hot:true
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
         loader: 'style-loader!css-loader'
      }
    ]
  },
   plugins: [
   new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
   new webpack.HotModuleReplacementPlugin()
   ]
}