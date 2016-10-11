const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConf = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '',
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    progress: true,
    colors: true,
    proxy: {},
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['> 0%']
          }),
          require('precss')(),
        ],
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor_vue.js',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
});

module.exports = developmentConf;