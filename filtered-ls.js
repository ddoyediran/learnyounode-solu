const fs = require("fs");
const path = require("path");

const filePath = process.argv[2]; // get the third item in the array
const extension = process.argv[3]; // get the fourth item in the array

fs.readdir(filePath, (err, list) => {
  if (err) {
    throw err;
  }

  //   let arrList = list.filter((file) => {
  //     return path.extname(file) === `.${extension}`;
  //   });

  //   for (let i = 0; i < arrList.length; i++) {
  //     console.log(arrList[i]);
  //   }

  // alternative solution
  list.map((file) => {
    // check for those with the extension
    if (path.extname(file) === `.${extension}`) {
      console.log(file); // print to console
    }
  });
});
