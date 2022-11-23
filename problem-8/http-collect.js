const fs = require("fs");
const path = require("path");
const http = require("http");
const bl = require("bl");

const filePath = process.argv[2];

http.get(filePath, function (response) {
  response.pipe(
    bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      console.log(data.length); // length of the data
      //console.log(data.toString().length); // length of the data
      console.log(data.toString()); // print the data
    })
  );
});
