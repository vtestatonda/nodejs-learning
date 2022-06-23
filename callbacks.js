const sayHello = () => console.log("Hello World!");
setTimeout(sayHello, 2000);

// Ejemplo calculate
const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

const calculate = (arg1, arg2, operation) => {
  console.log("2");
  return console.log(operation(arg1, arg2));
};
console.log("1");
calculate(5, 2, multiply);
console.log("3");
calculate(5, 2, sum);
