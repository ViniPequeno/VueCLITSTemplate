const path = require("path");
module.exports = {
  // options...
  publicPath: "",
  outputDir: "build",
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "@componentes",
      path.resolve(__dirname, "src/components")
    );
    config.resolve.alias.set("@public", path.resolve(__dirname, "public"));
    config.resolve.alias.set("@views", path.resolve(__dirname, "src/views"));
    config.resolve.alias.set("@models", path.resolve(__dirname, "src/models"));
    config.resolve.alias.set("@utils", path.resolve(__dirname, "src/utils"));
  },
};
