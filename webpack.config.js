const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = 
{
    entry:{ 
      main: './src/main.js'
     
  },
    devtool: 'inline-source-map',
     mode: 'development',
    devServer: {contentBase: './dist'},
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
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
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
        new HtmlWebpackPlugin({title:'development',template:'./src/index.html'}),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    externals: {
      jquery: 'jQuery'
    }
};