const http = require("http");
//const host = "127.0.0.1";
const host = "localhost";
const port = 3000;
//http://127.0.0.1:3000

const requestListener = function (res, res) {
  res.writeHead(200);
  res.end("hello word");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => console.log("App running on port", port));
