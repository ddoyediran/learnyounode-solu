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

/**
 * Description
 * Create a file named http-collect.js.  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  


  Hints
   
 */
