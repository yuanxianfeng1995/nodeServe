const path = require("path")
module.exports = {
  target: "node",
  entry: "./bin/www",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', 
      exclude: /node_modules/ }
    ]
  }
}

