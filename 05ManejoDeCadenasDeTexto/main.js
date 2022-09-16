// Manejo de cadenas de texto — en JavaScript #ff0

// A continuación, centraremos nuestra atención en las cadenas —, así es como se llaman las piezas de texto en la programación. En este artículo, veremos todas las cosas comunes que realmente debe saber sobre las cuerdas al aprender JavaScript, como crear cuerdas, escapar de citas en cuerdas y unir cadenas.

// Cuerdas — lo básico
// Las cuerdas se tratan de manera similar a los números a primera vista, pero cuando profundice, comenzará a ver algunas diferencias notables. Comencemos ingresando algunas líneas básicas en el consola de desarrolladores del navegador para familiarizarnos a nosotros mismos.

// Crear una cadena
// Para comenzar, ingrese las siguientes líneas:

const string = "the revolution will not be televised.";

console.log(string);

// Al igual que lo hicimos con los números, estamos declarando una variable, inicializándola con un valor de cadena y luego devolviendo el valor. La única diferencia aquí es que al escribir una cadena, debe rodear el valor con comillas.
// Si no hace esto, o pierde una de las citas, obtendrá un error. Intente ingresar las siguientes líneas:

// const badString1 = this is a test; // error
// const badString2 = "this is a test; // error
// const badString3 = this is a test"; // error

// Estas líneas no funcionan porque se supone que cualquier texto sin comillas es un nombre de variable, un nombre de propiedad, una palabra reservada o similar. Si el navegador no puede encontrarlo, se genera un error ( p. "falta; antes de la declaración" ). Si el navegador puede ver dónde comienza una cadena, pero no puede encontrar el final de la cadena, como lo indica la segunda cita, se queja con un error ( con "literal de cadena no terminado"). Si su programa está planteando tales errores, regrese y verifique todas sus cadenas para asegurarse de que no le falten comillas.

// Lo siguiente funcionará si definió previamente la variable string2 — pruébalo ahora:

const string2 = "lorem lorem lorem";

const badString = string2;

console.log(badString);

// badString ahora está configurado para tener el mismo valor que string2.

// Citas individuales versus comillas dobles
// En JavaScript, puede elegir comillas simples o comillas dobles para ajustar sus cadenas. Lo siguiente funcionará bien:

const sgl = "Single quotes";

const dbl = "Double quotes";

console.log(sgl);
console.log(dbl);

// Hay muy poca diferencia entre los dos, y el que usa se debe a la preferencia personal. Sin embargo, debe elegir uno y cumplirlo; ¡El código citado de manera diferente puede ser confuso, especialmente si usa dos comillas diferentes en la misma cadena! Lo siguiente devolverá un error:

// const badQuotes = "this is bad';

// El navegador pensará que la cadena no se ha cerrado porque el otro tipo de cotización que no está utilizando para contener sus cadenas puede aparecer en la cadena. Por ejemplo, ambos están bien:

const sglDbl = 'Whould you eat a "fish supper"?';

const dblSgl = "I'm feeling blue.";

console.log(sglDbl);
console.log(dblSgl);

// Sin embargo, no puede incluir la misma marca de cotización dentro de la cadena si se está utilizando para contenerlos. Lo siguiente será un error, ya que confunde al navegador en cuanto a dónde termina la cadena:

// const bigmouth = 'I' ve got no right to take my place...'; // error

// Escapando caracteres en una cadena
// Para arreglar nuestra línea de código de problema anterior, necesitamos escapar de la marca de cotización de problema. Escapar personajes significa que les hacemos algo para asegurarnos de que sean reconocidos como texto, no como parte del código. En JavaScript, hacemos esto poniendo una barra diagonal inversa justo antes del personaje. Prueba esto:

// const bigmouth2 = 'I\' ve got no right to take my place...'; // correcto

// console.log(bigmouth2);

// Esto funciona bien. Puedes escapar de otros personajes de la misma manera, p. \", y hay algunos códigos especiales además. Ver Secuencias de escape para más detalles.

// Concatenar cadenas #008000
// Concatenar solo significa "unirse". Para unir cadenas en JavaScript, puede usar un tipo diferente de cadena, llamado literal de plantilla.

// Un literal de plantilla se parece a una cadena normal, pero en lugar de usar comillas simples o dobles (' o "), se usan caracteres de retroceso (`):

const templateLiteral = `Hello`;

// Esto puede funcionar igual que una cadena normal, excepto que puede incluir variables en ella, envueltas dentro de caracteres ${ }, y el valor de la variable se insertará en el resultado:

const name1 = `Chris`;

const greeting = `Hello, My name is ${name1}`;

console.log(greeting);

// Puede utilizar la misma técnica para unir dos variables:

const one = "Hello, ";
const two = "how are you?";

const joined = `${one}${two}`;

console.log(joined);

// Concatenación en contexto
// Echemos un vistazo a la concatenación que se utiliza en acción:

const button1 = document.querySelector(".btn1");

function great() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button1.addEventListener("click", great);

// Aquí estamos usando la función window.prompt() que le pide al usuario que responda una pregunta a través de un cuadro de diálogo emergente y luego almacena el texto que ingresa dentro de una variable determinada, en este caso name. Luego usamos la función window.alert() para mostrar otra ventana emergente que contiene una cadena que inserta el nombre en un mensaje de saludo genérico.

// Concatenación usando "+"
// También puede concatenar cadenas utilizando el operador +:

const greeting2 = "Hello";
const name2 = "Chris";

console.log(greeting2 + " " + name2);

// Sin embargo, los literales de plantilla generalmente le dan código más legible:

const greeting3 = "Hello";
const name3 = "Juan";

console.log(`${greeting3} ${name3}`);

// Números vs. cadenas #008000
// Entonces, ¿qué sucede cuando intentamos combinar una cadena y un número? Vamos a probarlo en nuestra consola:

const name4 = "Front ";
const number = 242;

console.log(`${name4}${number}`);

// Puede esperar que esto devuelva un error, pero funciona bien. Tratar de representar una cadena como un número realmente no tiene sentido, pero representar un número como una cadena sí, por lo que el navegador convierte el número en una cadena y concatena las dos cadenas.

// Si tiene una variable numérica que desea convertir en una cadena pero no cambiar de otro modo, o una variable de cadena que desea convertir en un número pero no cambiar de otro modo, puede utilizar las dos construcciones siguientes:

const myString = "123";

const myNum = Number(myString);

console.log(typeof myNum);

// Por el contrario, cada número tiene un método llamado toString() que lo convierte en la cadena equivalente. Prueba esto:

const myNum2 = 123;

const myString2 = myNum2.toString();

console.log(typeof myString2);

// Estas construcciones pueden ser realmente útiles en algunas situaciones. Por ejemplo, si un usuario introduce un número en el campo de texto de un formulario, se trata de una cadena. Sin embargo, si desea agregar este número a algo, necesitará que sea un número, por lo que puede pasarlo a través Number() para manejar esto.

// Inclusión de expresiones en cadenas #008000
// Puede incluir expresiones JavaScript en literales de plantilla, así como variables simples, y los resultados se incluirán en el resultado:

const song = "Fight the Youth";
const score = 8;

const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%`;

console.log(output);

// Cadenas multilínea #008000
// Los literales de plantilla respetan los saltos de línea en el código fuente, por lo que puede escribir cadenas que abarquen varias líneas como esta:

const output2 = `I like the song.
I gave a score of 90%.
I like the song.
I like the song.
I like the song.
`;

console.log(output2);

// Para tener la salida equivalente usando una cadena normal, tendría que incluir caracteres de salto de línea (\n) en la cadena:

const output3 =
  "I like the song.\nI gave a score of 90%.\nI gave a score of 90%.\nI gave a score of 90%.";

console.log(output3);

// Métodos de cadena útiles #ff0

// Ahora que hemos analizado los conceptos básicos de las cadenas, subamos una marcha y comencemos a pensar en qué operaciones útiles podemos hacer en las cadenas con métodos incorporados, como encontrar la longitud de una cadena de texto, unir y dividir cadenas, sustituir un carácter en una cadena por otro y más.

// Cadenas como objetos #008000
// La mayoría de las cosas son objetos en JavaScript. Al crear una cadena, por ejemplo, mediante el uso de

const string3 = "This is my string";

// la variable se convierte en una instancia de objeto de cadena y, como resultado, tiene un gran número de propiedades y métodos disponibles

// Ahora, antes de que tu cerebro comience a derretirse, ¡no te preocupes! Realmente no necesita saber sobre la mayoría de estos al principio de su viaje de aprendizaje. Pero hay algunos que potencialmente usará con bastante frecuencia que veremos aquí.

// Introduzcamos algunos ejemplos en la consola del desarrollador del navegador.
