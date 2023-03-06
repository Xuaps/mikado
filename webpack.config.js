const WebpackPwaManifest = require("webpack-pwa-manifest");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = ({ env }) => ({
  entry: "./src/app/main.ts",
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // cache busting
      output: {
        filename: "index.html",
      },
    }),
    new WebpackPwaManifest({
      name: "Mikado",
      short_name: "Mikado",
      start_url: ".",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#4285f4",
      description: "Mikado method tool",
      crossorigin: null,
      inject: true,
      fingerprints: true,
      ios: false,
      publicPath: "./",
      includeDirectory: true,
      icons: [
        {
          src: path.resolve("public/assets/mikado.png"),
          sizes: [48, 72, 96, 128, 144, 168, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new WorkboxPlugin.InjectManifest({
      maximumFileSizeToCacheInBytes: 4194304,
      swSrc: path.resolve(__dirname, "/src/sw/sw.js"),
      swDest: "sw.js",
    }),
    new NodePolyfillPlugin(),
    new Dotenv(),
  ],
});
