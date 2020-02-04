const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); // добавили плагин
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { main: './src/pages/index/index.js', about: './src/pages/about/about.js', analytics: './src/pages/analytics/analytics.js'   },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].[chunkhash].js',
  },
  // указали путь к файлу, в квадратных скобках куда вставлять сгенерированный хеш
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
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]',
        options: {
          publicPath: '../'
        }
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
          {
            loader: 'image-webpack-loader',
            options: {}
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : {loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}),
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/style.[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/index/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        inject: false,
        template: './src/pages/about/about.html',
        filename: 'about.html'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/pages/analytics/analytics.html',
        filename: 'analytics.html'
      }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};