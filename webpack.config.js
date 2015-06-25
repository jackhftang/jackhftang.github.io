module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  devServer: {
    contentBase: ".",
    colors: true,
    noInfo: true,
    hot: true,
    inline: true
  }
};
