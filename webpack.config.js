const path = require("path")
// const fs = require("fs")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const { ProvidePlugin } = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"

const PATHS = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
  assets: "assets",
}

const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = ["search"] /* fs.readdirSync(PAGES_DIR) */
const PAGES_TS = Object.fromEntries(
  new Map(PAGES.map((page) => [page, `${PAGES_DIR}/${page}`]))
)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  }
  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()]
  }
  return config
}

const babelOptions = (...preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-transform-runtime"],
  }

  if (preset) {
    preset.forEach((p) => {
      opts.presets.push(p)
    })
  }

  return opts
}

const config = {
  mode: "development",
  externals: {
    paths: PATHS,
  },
  entry: "./src/index.tsx" /* PAGES_TS */,
  output: {
    filename: "[contenthash].bundle.js",
    clean: true,
    path: PATHS.dist,
    publicPath: "/",
    assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    compress: true,
    port: 4321,
    contentBase: PATHS.dist,
  },
  optimization: optimization(),
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".png", ".jpg"],
    alias: {
      "@modules": `${PATHS.src}/modules`,
      "@fonts": `${PATHS.src}/${PATHS.assets}/fonts`,
      "@img": `${PATHS.src}/${PATHS.assets}/img`,
      "@": PATHS.src,
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[contenthash].bundle.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${PATHS.src}/${PATHS.assets}/img`,
          to: `${PATHS.assets}/img`,
          noErrorOnMissing: true,
        },
        {
          from: `${PATHS.src}/${PATHS.assets}/fonts`,
          to: `${PATHS.assets}/fonts`,
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: `index.html`,
    }),
    // ...PAGES.map(
    //   (page) =>
    //     new HtmlWebpackPlugin({
    //       template: `${PAGES_DIR}/${page}/index.pug`,
    //       filename: `index.html`,
    //       chunks: [`${page}`],
    //     })
    // ),
    // new ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions(),
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
          },
          {
            loader: "babel-loader",
            options: babelOptions("@babel/preset-typescript"),
          },
        ],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
          },
          {
            loader: "babel-loader",
            options: babelOptions(
              "@babel/preset-typescript",
              "@babel/preset-react"
            ),
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true,
            root: PATHS.src,
          },
        },
      },
    ],
  },
}

module.exports = (env, argv) => {
  return config
}
