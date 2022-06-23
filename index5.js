const http = require("http");
//esto nos permite usar http en nuestro servidor
const colors = require("colors");

const handleserver = function (req, res) {
  res.writeHead(200, { "content.type": "text/html" });
  // ver: https://developer.mozilla.org/es/docs/Web/HTTP/Status
  //el 200 significa que la respuesta del servidor al navegador es correcta
  //tambien podemos darle el codigo 404 como recurso no encontrado
  //como nuestra peticion es satisfactoria el codigo es 200, que todo esta bien
  //luego le estamos dando el contenido, que es un HTML
  res.write("<h1>Hola mundo.</h1>");
  //le estamos dando el mensaje al navegador
  res.end();
  //con end termina la respuesta y puede recibir peticiones de otro usuarios.
};

const server = http.createServer(handleserver);
//metodo listen lo que hace define en que puerto va a ser escuchado el servidor, dice que ejecute el servidor en el puerto 3000
//esto sirve para poder hacer varias cosas al mismo tiempo

//para poder hacer modificaicones y correr nuevamente el servidor hay que hacer Ctrl c + Ctrl c

//en este caso me esta retornando un objeto llamado server
server.listen(3000, function () {
  console.log("server on port 3000".rainbow);
});
