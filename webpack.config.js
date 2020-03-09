const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'home'),
    filename: '[name].js',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '4 Key Metrics',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: '4 Key Metrics',
      template: 'src/index.html',
      filename: "404.html"
    }),
  ],
};

// config.devServer = {
//   port: 8888,
//   open: true,
//   proxy: {
//     '/api': {
//       target: 'http://localhost:1337',
//       pathRewrite: { '^/api' : '' },
//     },
//   },
// };

module.exports = config;
