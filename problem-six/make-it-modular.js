const fs = require("fs");
const path = require("path");

const myModule = require("./mymodule.js");

const filePath = process.argv[2]; // get the third item in the array
const extension = process.argv[3]; // get the fourth item in the array

myModule(filePath, extension, function (err, anArray) {
  if (err) {
    console.log("there is an error");
    throw err;
  }

  anArray.map((file) => {
    console.log(file);
  });
});
