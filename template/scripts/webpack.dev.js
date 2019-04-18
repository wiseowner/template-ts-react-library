const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    app: './example/index.tsx',
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: ["awesome-typescript-loader", "tslint-loader"] 
      },
      { 
        enforce: "pre", test: /\.js$/, loader: "source-map-loader" 
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'quick-start',
      template: 'example/index.html',
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3333/',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3333,
    historyApiFallback: true,
    compress: true,
  },
  devtool: 'source-map',
};