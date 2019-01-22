const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withBabelMinify = require("next-babel-minify")();
const withPlugins = require("next-compose-plugins");
module.exports = withBabelMinify(withCSS(withImages()));
