const fs = require("fs");

const filePath = process.argv.slice(2);

fs.readFile(filePath[0], "utf8", (err, data) => {
  if (err) {
    throw error;
  }
  // const countLines = data.toString().split("\n");
  const countLines = data.split("\n");
  console.log(countLines.length - 1);
});
