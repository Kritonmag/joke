const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
  ]
  },
  plugins: [
    new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
  ],
  devServer: {
    port: 3001,
    open: true,
    hot: IS_DEV
  },
  devtool: setupDevtool()
}