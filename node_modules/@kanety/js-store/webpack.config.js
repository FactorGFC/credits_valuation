const webpack = require("webpack");

module.exports = {
  mode: "production",

  entry: {
    "js-store": "./src/index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: "/dist",
    library: "JsStore"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },

  watchOptions: {
    poll: 1000
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
    disableHostCheck: true
  }
};
