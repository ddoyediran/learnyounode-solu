const fs = require("fs");
const path = require("path");

function printDir(dirname, fileExt, callback) {
  fs.readdir(dirname, function (err, data) {
    if (err) {
      return callback(err);
    }
    let arrList = data.filter((file) => {
      return path.extname(file) === `.${fileExt}`;
    });
    callback(null, arrList);
  });
}

module.exports = printDir;
