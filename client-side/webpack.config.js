const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.tsx",
  target: "web",
  mode: "development",
  entry: ["@babel/polyfill", "./src/main.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core",
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    })
  ],
};
