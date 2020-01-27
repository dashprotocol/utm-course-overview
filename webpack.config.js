const path = require('path')

module.exports = {
    // 1
    entry: './client/src/index.js',
    // 2
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
      contentBase: './dist'
    }
  };