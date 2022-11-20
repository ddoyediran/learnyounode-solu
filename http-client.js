const http = require("http");

const filePath = process.argv[2]; // get the third item in the array

http.get(filePath, function callback(response) {
  //   response.on("data", console.log);
  //   response.setEncoding("utf8");
  //   response.on("error", console.error);

  //alternative solution
  response
    .on("data", function (data, error) {
      if (error) {
        throw error;
      }

      console.log(data);
    })
    .setEncoding("utf8");
});
