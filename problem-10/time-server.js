const net = require("net");

const portNum = process.argv[2];

const server = net.createServer(function (socket) {
  let date = new Date(); // create date instance
  // create the current date
  let data = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

  // write the data to the socket
  socket.write(data + "\n");

  // close the socket
  socket.end();
});

server.listen(parseInt(portNum));
