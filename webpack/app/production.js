const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { pathOr } = require('ramda');
const dateFnsSupportedLang = require('../config/date-fns.config');

const packageJSON = require('../../package.json');

const getPackageConfig = (path, defaultValue = '') =>
  pathOr(defaultValue, path, packageJSON);

const getConfig = require('../config');
const commomConfig = require('../common');

module.exports = merge(commomConfig, {
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    getConfig('appIndex')
  ],
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: getConfig('appDist'),
    filename: '[name]-[fullhash].js',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        }
      }
    }
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(
        `[/\\\\\](${dateFnsSupportedLang.join('|')})[/\\\\\]index\.js$`,
      ),
    ),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 1000,
    }),
    new HtmlWebpackPlugin({
      template: getConfig('appHTMLTemplate'),
      title: getConfig('appName'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new FaviconWebpackPlugin({
      logo: getConfig('appFavicon'),
      mode: 'webapp',
      favicons: {
        appName: getPackageConfig(['name']),
        appDescription: getPackageConfig(['description']),
        developerName: getPackageConfig(['author']),
        developerURL: getPackageConfig(['repository'], ['url']),
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
});
