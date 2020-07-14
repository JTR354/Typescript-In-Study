const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const {CheckerPlugin} = require('awesome-typescript-loader') // 类型检查有坑，建议用ts-loader

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          // loader: 'ts-loader',
          loader: 'awesome-typescript-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/tpl/index.html')
    }),
    // new ForkTsCheckerWebpackPlugin()
    new CheckerPlugin()
  ]
}