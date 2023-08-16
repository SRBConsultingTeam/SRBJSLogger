module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: __dirname,
    filename: "SRBJSLogger.min.js",
    libraryTarget: "umd",
    library: "SRBJSLogger",
  },
  devtool: "source-map",
};
