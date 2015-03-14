module.exports = {
  cache: true,

  watch: true,

  entry: {
    'app': ['./js/app.js']
  },

  output: {
    filename: '[name].js'
  },
  
  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader?experimental&optional=runtime'}
    ]
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  }
};