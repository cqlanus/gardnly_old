const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: ['axios', 'react', 'react-dom', 'react-redux', 'redux', 'react-router-dom' ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash:8].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash:8].bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    new CleanWebPackPlugin(path.resolve(__dirname, 'public'), {
      watch: true
    }),
    new HtmlWebpackPlugin({
      title: 'gardnly',
      filename: 'index.html',
      template: 'app/index.html'
    })
  ],
}
