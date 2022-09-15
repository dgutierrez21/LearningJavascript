// Alcance #ff0
// El ámbito es el contexto actual de ejecución en el que los valores y expresiones son "visibles" o pueden ser referenciados. Si una variable o expresión no está en el ámbito actual, no estará disponible para su uso. Los ámbitos también se pueden superponer en una jerarquía, de modo que los ámbitos secundarios tengan acceso a los ámbitos primarios, pero no al revés.

// JavaScript tiene los siguientes tipos de ámbitos:

// Ámbito global: el ámbito predeterminado para todo el código que se ejecuta en modo de script.

// Ámbito del módulo: el ámbito del código que se ejecuta en modo módulo.

// Ámbito de la función: el ámbito creado con una función.

// Además, las variables declaradas con let o const pueden pertenecer a un ámbito adicional:

// Ámbito de bloque: el ámbito creado con un par de llaves rizadas (un bloque).
// Una función crea un ámbito, de modo que (por ejemplo) no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones. Por ejemplo, lo siguiente no es válido:

function exampleFunction() {
  const x = "declarado dentro de la función"; // x sólo puede utilizarse en exampleFunction
  console.log("Interior de la función");
  console.log(x);
}

exampleFunction();

// console.log(x); // Uncaught ReferenceError: x is not defined

// Sin embargo, el siguiente código es válido debido a que la variable se declara fuera de la función, lo que la hace global:

const z = "Declarado fuera de la función";

function examplefunction2() {
  console.log("Interior de la función");
  console.log("Ejecutando dentro de la función: " + z);
}

examplefunction2();

console.log("Exterior de la función");
console.log("Ejecutando fuera de la función: " + z);

// Bloquea solo las declaraciones let y const, pero no las declaraciones var.

{
  var y = 1;
}

console.log(y); // resultado: 1

{
  const a = 5;
}

console.log(a); // Uncaught ReferenceError: a is not defined

// https://jstutorial.medium.com/the-visual-guide-to-javascript-variable-definitions-scope-abfb86edad