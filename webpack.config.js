const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "main.[hash].js",
      path: path.resolve(__dirname, "dist")
   },
   mode: "development",
   plugins: [
      new HTMLWebpackPlugin({
         template: "./src/index.html"
      }),
      new CleanWebpackPlugin()
   ]
}