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

// Hoisting de variables #008000

// El levantamiento también funciona con variables, por lo que puede usar una variable en el código antes de que se declare y/o inicialice.

// Sin embargo, JavaScript solo eleva las declaraciones, ¡no las inicializaciones! Esto significa que la inicialización no ocurre hasta que se ejecuta la línea de código asociada, incluso si la variable se inicializó originalmente y luego se declaró, o se declaró e inicializó en la misma línea.

// Hasta que se alcanza ese punto en la ejecución, la variable tiene su inicialización predeterminada (undefined para una variable declarada usando var, de lo contrario sin inicializar).

// Nota: Conceptualmente, el levantamiento de variables a menudo se presenta como el intérprete "dividiendo la declaración de variables y la inicialización, y moviendo (solo) las declaraciones a la parte superior del código".

// A continuación se muestran algunos ejemplos que muestran lo que puede suceder si utiliza una variable antes de que se declare.

// Hoisting de var

// Aquí declaramos y luego inicializamos el valor de un var después de usarlo. La inicialización predeterminada del var no está undefined.

console.log(num); // Devuelve 'undefined' de la declaración var hoisting (no 6)

var num; // declaración

num = 6; // Inicialización

console.log(num); // // Devuelve 6 después de ejecutar la línea con la inicialización.

// Lo mismo sucede si declaramos e inicializamos la variable en la misma línea.

console.log(num2);

var num2 = 16;

console.log(num2);

// Si olvidamos la declaración por completo (y solo inicializamos el valor), la variable no se eleva. Al intentar leer la variable antes de inicializarla, se obtiene una excepción ReferenceError.

// console.log(num3); // Throws ReferenceError exception - the interpreter doesn't know about `num`.

num3 = 26; // Initialization

// Sin embargo, tenga en cuenta que la inicialización también causa la declaración (si aún no se ha declarado). El fragmento de código a continuación funcionará, porque aunque no se levante, la variable se inicializa y se declara de manera efectiva antes de que se use.

a = "Cran"; // Initialize a
b = "berry"; // Initialize b

console.log(`${a}${b}`);

// let y const hoisting

// Las variables declaradas con let y const también se elevan pero, a diferencia var, no se inicializan con un valor predeterminado. Se generará una excepción si se lee una variable declarada con let o const antes de inicializarse.

console.log(num4); // Uncaught ReferenceError: Cannot access 'num4' before initialization

let num4 = 36;

// #FF0000
// Tenga en cuenta que lo que importa es el orden en el que se ejecuta el código
// no el orden en el que está escrito en el archivo de origen. El código se ejecutará correctamente siempre que la línea que inicializa la variable se ejecute antes que cualquier línea que la lea.

// Hoisting de clases #008000

// Las clases definidas mediante una declaración de clase se elevan, lo que significa que JavaScript tiene una referencia a la clase. Sin embargo, la clase no se inicializa de forma predeterminada, por lo que cualquier código que la utilice antes de que se ejecute la línea en la que se inicializa generará un ReferenceError.
