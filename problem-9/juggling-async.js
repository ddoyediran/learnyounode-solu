const http = require("http");
const bl = require("bl");

const pathLength = process.argv.slice(2);
let count = pathLength.length;

let result = [];

for (let i = 0; i < pathLength.length; i++) {
  http.get(pathLength[i], function (response) {
    response.pipe(
      bl((err, data) => {
        if (err) {
          return console.error(err);
        }

        result[i] = data.toString();
        count = count - 1;

        if (count === 0) {
          for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
          }
        }
      })
    );
  });
}
