const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const config = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = [
  merge(config, {
    entry: './src/entry-client.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    }
  }),
  merge(config, {
    target: 'node',
    entry: './src/entry-server.js',
    devtool: false,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'server.bundle.js',
      libraryTarget: 'commonjs2'
    },
    externals: Object.keys(require('./package.json').dependencies),
    plugins: [
      new webpack.DefinePlugin({
        'process.env': 'production'
      })
    ]
  })
];