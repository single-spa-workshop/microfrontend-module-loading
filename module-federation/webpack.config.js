const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = [
  {
    entry: path.resolve(__dirname, "./app1/index.js"),
    output: {
      path: path.resolve(__dirname, "dist/app1"),
      publicPath: "/module-federation/dist/app1/",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        remotes: {
          styleguide:
            "styleguide@/module-federation/dist/styleguide/styleguide.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
          },
          "react-dom": {
            singleton: true,
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./app1/index.html"),
      }),
    ],
  },
  {
    entry: path.resolve(__dirname, "./app2/index.js"),
    output: {
      path: path.resolve(__dirname, "dist/app2"),
      publicPath: "/module-federation/dist/app2/",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app2",
        remotes: {
          styleguide:
            "styleguide@/module-federation/dist/styleguide/styleguide.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
          },
          "react-dom": {
            singleton: true,
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./app2/index.html"),
      }),
    ],
  },
  {
    entry: path.resolve(__dirname, "./styleguide/index.js"),
    output: {
      path: path.resolve(__dirname, "dist/styleguide"),
      publicPath: "/module-federation/dist/styleguide/",
    },
    devtool: "source-map",
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "styleguide",
        exposes: {
          "./widget": path.resolve(__dirname, "./styleguide/widget.js"),
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
          },
          "react-dom": {
            singleton: true,
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin(),
    ],
  },
];
