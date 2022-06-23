const fs = require("fs");
const Query = require("mysql/lib/protocol/sequences/Query");

fs.writeFile("./texto.txt", "linea uno", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("archivo creado");
});

console.log("ultima linea de codigo");

//esta funcion (err) se conoce como callback
//y el codigo desde fs.write hasta aca es un codigo asincronico
//esta es la clave de porque nodejs hoy puede manejar una gran cantidad de usuarios, el codigo asincronico
//nodejs delega tareas, pide informacion pero no siempre hace el trabajo computacional.

/*const result = fs.writeFile("", "");
//esto es un codigo bloqueante, por lo que remplazo el codigo asincronico.
//si escribimos la funcion de esta manera entones el codigo espera hasta que termine de ejecutarce para poder seguir con el codigo. tardando mucho timepo
*/

/*
const users = Query("SELECT * FROM Users")
//consulta a la base de datos y cuando termine se almacena en la constante users

Query("SELECT * FROM Users", function (err, Users){
if (err) {console.log(err)}
if(users){}
})
//en este caso es un codigo asincronico entonces la base de datos realiza la busqueda y cuando termina lo envia a nuestro servidor
*/
