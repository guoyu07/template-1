const webpack = require('webpack');
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BaseDir = 'index/';

const productionConf = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: BaseDir + 'js/app.[hash:8].js',
    publicPath: '/',
  },
  stats: {
    children: false
  },
  module: {
    rules: [{
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'url?limit=10000&name=' + BaseDir + 'images/[name].[ext]',
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['> 0%']
          }),
          require('precss')(),
        ],
        css: ExtractTextPlugin.extract({
          loader: "css-loader",
          fallbackLoader: "vue-style-loader"
        })
      }
    }),
    new ExtractTextPlugin(BaseDir + 'css/[name].[hash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: BaseDir + 'js/vue.[hash:8].js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: BaseDir + 'html/index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    }),
    // Gzip
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]
})

module.exports = productionConf