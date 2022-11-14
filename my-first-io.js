const fs = require("fs");

const filePath = process.argv.slice(2);

const fileData = fs.readFileSync(filePath[0]);

const strArray = fileData.toString();

const countLine = strArray.split("\n");

console.log(countLine.length - 1);
