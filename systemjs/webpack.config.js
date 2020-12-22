const path = require("path");

module.exports = [
  {
    entry: path.resolve(__dirname, "./app1.js"),
    output: {
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      filename: "app1.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    devtool: "source-map",
    externals: ["styleguide", "react", "react-dom"],
  },
  {
    entry: path.resolve(__dirname, "./app2.js"),
    output: {
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      filename: "app2.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    devtool: "source-map",
    externals: ["styleguide", "react", "react-dom"],
  },
  {
    entry: path.resolve(__dirname, "./styleguide.js"),
    output: {
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      filename: "styleguide.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    devtool: "source-map",
    externals: ["react", "react-dom"],
  },
];
