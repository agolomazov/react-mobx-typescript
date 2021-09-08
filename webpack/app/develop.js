const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const getConfig = require('../config');
const commomConfig = require('../common');

const config = merge(commomConfig, {
  entry: [getConfig('appDevIndex')],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: getConfig('devServer'),
  output: {
    path: getConfig('appDist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: getConfig('appHTMLTemplate'),
      title: getConfig('appName'),
    }),
    new StylelintPlugin({
      exclude: [
        'node_modules',
        getConfig('appStylesPackage'),
        getConfig('appDist')
      ],
      extensions: ['css', 'scss'],
      configFile: getConfig('appStylelintConfig'),
      formatter: 'string',
      outputReport: false
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
});

module.exports = config;
