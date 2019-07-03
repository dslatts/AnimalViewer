'use-strict';

const path = require('path');

const config = {
  mode: 'production',
  entry: './browser/app.jsx',
  output: {
    path: path.join(__dirname, 'browser'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      }
    ],
  },
};

module.exports = config;
