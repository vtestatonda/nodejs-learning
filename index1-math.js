function add(x1, x2) {
  return x1 + x2;
}

function substract(x1, x2) {
  return x1 - x2;
}

function multiply(x1, x2) {
  return x1 * x2;
}

function divide(x1, x2) {
  if (x2 === 0) {
    console.log("no se puede dividir por 0");
  } else {
    return x1 / x2;
  }
}

function test(x1, x2, x3) {
  return x1 + x2 + x3;
}

/*//-------caso 1---------- uso exports.objeto y le asigno propiedaes que son las funciones*/
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;
// exports.hola = test;
/*hola es como lo voy a llamar desde la otra funcion y test es lo que me va a entregar*/

/*----------caso 2-------------- uso el objeto math y le asigno propiedaes que son las funciones
al objeto math le voy a agregar las propiedades add,substract,test.*/
const Math = {};
//creo un objeto

Math.add = add;
Math.substract = substract;
Math.hola = test;
/*hola es como lo voy a llamar desde la otra funcion y test es lo que me va a entregar*/

module.exports = Math;
/*en este caso estoy exportando el objeto math*/

/*---------caso 3---------- creo una funcion y la exporto */
// function hello(name) {
//   console.log("hola, name");
// }
/*creamos una funcion*/
// module.exports = hello;
/*la diferencia de usar module.export vs exports.add
exports.add = exporta unicamente una propiedad de un objeto
module.export = puede exportar funciones, objetos, variables,etc*/
