const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "eval-cheap-module-source-map",

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/index.js",
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  //   publicPath: '/dist'
  // },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: "[path][name].[ext]?hash=[hash:20]",
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/terminal.html",
      inject: true,
      chunks: ["index"],
      filename: "terminal.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/service.html",
      inject: true,
      chunks: ["index"],
      filename: "service.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/training.html",
      inject: true,
      chunks: ["index"],
      filename: "training.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/transportion.html",
      inject: true,
      chunks: ["index"],
      filename: "transportion.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/values.html",
      inject: true,
      chunks: ["index"],
      filename: "values.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/warehouse.html",
      inject: true,
      chunks: ["index"],
      filename: "warehouse.html",
    }),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    // }),
  ],
};
