const fs = require("fs");
fs.readFile("./texto.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
  //esto es un codigo asincrono, lo ejecuta y sigue ejecutando
  //si no ponemos tostring(convertir a texto) nos envia los datos crudos y no podemos leerlos.
});
//va a leer el archivo que tengo en mi computadora (haciendo que mi computadora trabaje) y cuando termine de leerlo ejecuta la funcion.
//por esto se llama por eventos, solo ejecuta eventos pero el laburo lo hace otro
