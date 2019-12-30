const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
};
