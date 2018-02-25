const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const resolve = file => require('path').resolve(__dirname, file)

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      '@components': resolve('../src/components'),
      '@directives': resolve('../src/directives'),
      '@mixins': resolve('../src/mixins'),
      '@util': resolve('../src/util'),
      'stylus': resolve('../src/stylus')
    }
  },
  mode: process.env.NODE_ENV,
  node: {
    fs: 'empty'
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    }),
    new webpack.LoaderOptionsPlugin({ options: {} })
  ]
}
