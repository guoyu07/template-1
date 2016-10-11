const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

const developmentConf = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../../public'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
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
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: path.resolve(__dirname, '../index.html'),
    }),
    new DashboardPlugin(dashboard.setData)
  ],
});

module.exports = developmentConf;