const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
  target: "web",
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
    open: true,
    liveReload: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "logo.svg"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = { ...webpackConfig };
