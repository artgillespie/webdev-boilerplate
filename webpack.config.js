module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders:[
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
