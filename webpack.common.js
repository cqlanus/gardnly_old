const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: ['axios', 'react', 'react-dom', 'react-redux', 'redux', 'react-router-dom' ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
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
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      title: 'gardnly',
      template: 'app/index.html'
    })
  ],
}
