// Hoisting #ff0
// JavaScript Hoisting se refiere al proceso por el cual el intérprete parece mover la declaración de funciones, variables o clases a la parte superior de su ámbito, antes de la ejecución del código.

// La elevación permite que las funciones se utilicen de forma segura en el código antes de que se declaren.

// Las declaraciones de variables y clases también se elevan, por lo que también se puede hacer referencia a ellas antes de que se declaren. Tenga en cuenta que hacerlo puede provocar errores inesperados y, en general, no se recomienda.

// Hoisting de funciones #008000
// Una de las ventajas de la elevación es que le permite usar una función antes de declararla en su código.

catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

// El resultado del código anterior es: "Mi gato se llama Tigre"

// Sin hoisting tendrías que escribir el mismo código así:

function catName2(name) {
  console.log(`My cat's name is ${name}`);
}

catName2("Tom");

// El resultado del código anterior es: "Mi gato se llama Tom"
