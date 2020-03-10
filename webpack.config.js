const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/[name].[ext]',
            publicPath: 'dist',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '4 Key Metrics',
      template: 'src/index.html',
      filename: isProd ? "../index.html" : 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: '4 Key Metrics',
      template: 'src/index.html',
      filename: isProd ? "../404.html" : '404.html',
    }),
  ],
};

// if (!isProd) {
//   config.devServer = {
//     publicPath: '/dev/',
//   };
// }

module.exports = config;
