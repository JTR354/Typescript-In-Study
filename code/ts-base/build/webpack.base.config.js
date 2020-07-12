const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
console.log(path.join(__dirname, '../src/tpl/index.html'))
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
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/tpl/index.html')
    })
  ]
}