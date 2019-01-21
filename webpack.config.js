const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  module : {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader?modules&camelCase&localIdentName=[path]__[name]__[local]--[hash:base64:5]',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },

    ],
  }
}