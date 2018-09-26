const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

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
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, './dist'),
      libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
      whitelist: /\.vue$/
    }),
    plugins: [
      new VueSSRServerPlugin()
    ]
  })
];