const path = require("path");

module.exports = {
  entry: "./src/js/search.js",
  output: {
    filename: "search.js",
    path: path.resolve(__dirname, path.join("dist", "js")),
  },
};
