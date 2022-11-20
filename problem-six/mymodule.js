const fs = require("fs");
const path = require("path");

const filePath = process.argv[2]; // get the third item in the array
const extension = process.argv[3]; // get the fourth item in the array

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

// fs.readdir(filePath, (err, data) => {
//   if (err) {
//     throw err;
//   }

//   //   let arrList = data.filter((file) => {
//   //     return path.extname(file) === `.${extension}`;
//   //   });

//   //   for (let i = 0; i < arrList.length; i++) {
//   //     console.log(arrList[i]);
//   //   }

//   // alternative solution
//   data.map((file) => {
//     // check for those with the extension
//     if (path.extname(file) === `.${extension}`) {
//       console.log(file); // print to console
//     }
//   });
// });
