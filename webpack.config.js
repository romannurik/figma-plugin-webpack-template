const process = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: '', // force not using 'eval' which doesn't recognize __html__ and other globals
  entry: {
    main: './main.entry.ts',
    ui: './ui.entry.ts',
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), './dist'),
  },
  module: {
    rules: [
      // JS and TS
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      // CSS and SCSS
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.html',],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new HtmlWebpackPlugin({
      filename: 'ui.html',
      template: './ui.html',
      inlineSource: '.(js|css)$',
      chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],  
};
