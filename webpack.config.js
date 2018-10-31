const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = 
{
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {contentBase: './dist'},
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title:'development',template:'./src/index.html'})
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    }
};