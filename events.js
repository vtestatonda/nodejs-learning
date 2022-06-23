/*Creamos un evento*/

//creo una funcion con un objeto vacio
function Emiiter() {
  this.events = {};
}

//con prototype estoy modifiando las propiedades de emiiter.
//Con on estoy invocando a la funcion
//type es el typo del evento.
//listener es el que va a escuchar cuando el evento ocurra.
Emiiter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  //si hay un evento a vents de type le asignamos un events de type o un arreglo vacio
  this.events[type].push(listener);
};

//la siguiente funcion es para que emita nuestro evento. Cuando se emita tal evento hace tal cosa..
//recibe el type
Emiiter.prototype.emit = function (type, opts) {
  //con el if chequeamos si existe el type entonces ejecutamos el listener
  if (this.events[type]) {
    this.events[type].forEach((listener) => listener(opts));
  }
  //con el foreach estamos ingresando a todos los elementos del array
};
module.exports = Emiiter;
