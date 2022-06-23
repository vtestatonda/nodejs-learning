const colors = require("colors");
const express = require("express");
//friendwor de nodejs que me permite crear servidores

const server = express();

server.get("/", function (req, res) {
  res.send("<h1>hola mundo con express y node</h1>");
  res.end();
});

server.listen(3000, () => {
  // () => es lo mismo que poner function (), es otra manera usada
  console.log("server on port 3000".green);
});
