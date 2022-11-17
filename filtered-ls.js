const fs = require("fs");
const { pathToFileURL } = require("url");

const filePath = process.argv[2]; // get the third item in the array
const secondArg = process.argv[3]; // get the fourth item in the array

fs.readdir(filePath, (err, list) => {
  if (err) {
    throw err;
  }

  let arrList = list.filter((file) => {
    return path.extname(file) === `.${secondArg}`;
  });

  for (let i = 0; i < arrList.length; i++) {
    console.log(arrList(i));
  }
});
