const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withBabelMinify = require("next-babel-minify")({
  comments: false,
  compress: {
    // remove warnings
    warnings: process.env.NODE_ENV === "development" ? false : true,

    // Drop console statements
    drop_console: process.env.NODE_ENV === "development" ? false : true
  }
});
const withPlugins = require("next-compose-plugins");
module.exports = withBabelMinify(withCSS(withImages()));
