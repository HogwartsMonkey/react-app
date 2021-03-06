const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = 
{
    entry:{ 
      prod: './src/main.js'
     
  },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader','sass-loader']
            })
          }
          ,
          {
            test: /\.(png|jpg|gif)$/,
            use: 
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]'
                }
              }
            }
          
            ]
      },
    plugins : [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({title:'Caching',template:'./src/index.html'}),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },
    optimization:{
      runtimeChunk: 'single',
      splitChunks: {
               cacheGroups: {
                 vendor: {
                   test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                   chunks: 'all'
                 }
               }
             }
    }
};