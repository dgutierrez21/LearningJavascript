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

// Búsqueda de la longitud de una cadena #008000
// Esto es fácil: se utiliza la propiedad length. Intente introducir las siguientes líneas:

const browserType = "mozilla";

console.log(browserType.length);

// Esto debería devolver el número 7, porque "mozilla" tiene 7 caracteres. Esto es útil por muchas razones; por ejemplo, es posible que desee buscar las longitudes de una serie de nombres para que pueda mostrarlos en orden de longitud, o informar a un usuario de que un nombre de usuario que ha introducido en un campo de formulario es demasiado largo si tiene más de una longitud determinada.

// Recuperación de un carácter de cadena específico  #008000
// En una nota relacionada, puede devolver cualquier carácter dentro de una cadena utilizando la notación entre corchetes, lo que significa que incluye corchetes ([]) al final del nombre de la variable. Dentro de los corchetes, incluye el número del carácter que desea devolver, por lo que, por ejemplo, para recuperar la primera letra, haría lo siguiente:

const browserType2 = "Chromium";

console.log(browserType2[0]);

// Recuerde: ¡las computadoras cuentan desde 0, no desde 1!

// Para recuperar el último carácter de cualquier cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad length que vimos anteriormente:

const browser3 = "Opera";

console.log(browser3[browser3.length - 1]);

// La longitud de la cadena "Opera" es 5, pero debido a que el recuento comienza en 0, la posición del último carácter es 4; usando length-1 nos da el último carácter.

// Probar si una cadena contiene una subcadena #008000
// A veces querrás averiguar si una cadena más pequeña está presente dentro de una más grande (generalmente decimos si una subcadena está presente dentro de una cadena). Esto se puede hacer utilizando el método includes() que toma un solo parámetro: la subcadena que desea buscar.

// Devuelve true si la cadena contiene la subcadena false en caso contrario.

const browser4 = "Microsoft Edge";

let wordToSearch = "Edge";

let browser4Result = browser4.includes(wordToSearch);

console.log(browser4Result);

if (browser4Result) {
  console.log(`The word ${wordToSearch} has been found`);
} else {
  console.log(`the word ${wordToSearch} has NOT been found`);
}

// A menudo querrá saber si una cadena comienza o termina con una subcadena en particular. Esta es una necesidad lo suficientemente común como para que haya dos métodos especiales para esto: startsWith() y endsWith():

const browser5 = "Safari";

let wordToSearchStart2 = "Saf",
  wordToSearchEnd2 = "ari";

const browser5ResultStart = browser5.startsWith(wordToSearchStart2),
  browser5ResultEnd = browser5.endsWith(wordToSearchEnd2);

console.log(browser5ResultStart);

if (browser5ResultStart) {
  console.log(
    `The string ${browser5} if it begins with the word ${wordToSearchStart2}`
  );
} else {
  console.log(
    `The string ${browser5} does NOT begin with the word ${wordToSearchStart2}`
  );
}

console.log(browser5ResultEnd);

if (browser5ResultEnd) {
  console.log(
    `The string ${browser5} if it ends with the word ${wordToSearchEnd2}`
  );
} else {
  console.log(
    `The string ${browser5} does NOT end with the word ${wordToSearchEnd2}`
  );
}

// Búsqueda de la posición de una subcadena en una cadena #008000
// Puede encontrar la posición de una subcadena dentro de una cadena más grande mediante el método indexOf()). Este método toma dos parámetros: la subcadena que desea buscar y un parámetro opcional que especifica el punto de partida de la búsqueda.

// Si la cadena contiene la subcadena, indexOf() devuelve el índice de la primera aparición de la subcadena. Si la cadena no contiene la subcadena, indexOf() devuelve -1.

const tagLine = "MDN - Resources for developers, by developers";

console.log(tagLine.indexOf("developers")); // 20

// A partir de 0, si cuenta el número de caracteres (incluido el espacio en blanco) desde el principio de la cadena, la primera aparición de la subcadena "developers" está en el índice 20.

console.log(tagLine.indexOf("x")); // -1

// Esto, por otro lado, devuelve -1 porque el carácter x no está presente en la cadena.

// Entonces, ahora que sabes cómo encontrar la primera ocurrencia de una subcadena, ¿cómo haces para encontrar ocurrencias posteriores? Puede hacerlo pasando un valor que sea mayor que el índice de la aparición anterior como segundo parámetro del método.

const tagLine2 = "MDN - Resources for developers, by developers";

const firstOccurrence = tagLine2.indexOf("developers");
const secondOccurrence = tagLine2.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

// Aquí estamos diciendo el método para buscar la subcadena "developers" a partir del índice 21 (firstOccurrence + 1), y devuelve el índice 35.

// Extracción de una subcadena de una cadena #008000
// Puede extraer una subcadena de una cadena mediante el método slice()). Lo pasas:

// el índice en el que se va a empezar a extraer
// el índice en el que se va a dejar de extraer. Esto es exclusivo, lo que significa que el carácter de este índice no se incluye en la subcadena extraída.
// Por ejemplo:

const browser6 = "Mozilla";

console.log(browser6.slice(0, 4));

// El carácter en el índice 0 es "M" y el carácter en el índice 4 es "l" Así que extraemos todos los caracteres comenzando en "M" y terminando justo antes "l" dándonos "Mozi".

// Si sabe que desea extraer todos los caracteres restantes de una cadena después de un determinado carácter, no tiene que incluir el segundo parámetro. En su lugar, solo necesita incluir la posición del carácter desde donde desea extraer los caracteres restantes en una cadena. Pruebe lo siguiente:

console.log(browser6.slice(4));

// Esto devuelve "lla": esto se debe a que la posición del carácter de 4 es la letra "l" y debido a que no incluyó un segundo parámetro, la subcadena que se devolvió fue todos los caracteres restantes de la cadena.

// Nota: slice() también tiene otras opciones; estudie la página slice() para ver qué más puede averiguar.

// Cambio de caso #008000
// Los métodos de cadena toLowerCase() y toUpperCase() toman una cadena y convierten todos los caracteres en minúsculas o mayúsculas, respectivamente. Esto puede ser útil, por ejemplo, si desea normalizar todos los datos introducidos por el usuario antes de almacenarlos en una base de datos.

// Intentemos ingresar las siguientes líneas para ver qué sucede:

const radData = "My NaMe Is MuD";

console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Actualización de partes de una cadena #008000
// Puede reemplazar una subcadena dentro de una cadena por otra subcadena mediante el método replace()).

// En este ejemplo, proporcionamos dos parámetros: la cadena que queremos reemplazar y la cadena con la que queremos reemplazarla:

const browser7 = "Mozilla";

const updated = browser7.replace("Moz", "Van");

console.log(browser7);
console.log(updated);

// Tenga en cuenta que replace(), al igual que muchos métodos de cadena, no cambia la cadena a la que se llamó, sino que devuelve una nueva cadena. Si desea actualizar la variable browserType original, tendría que hacer algo como esto:

let browser8 = "Mozilla";
browser8 = browser8.replace("Moz", "Van");

console.log(browser8);

// También tenga en cuenta que ahora tenemos que declarar browserType usando let, no const, porque lo estamos reasignando.

// Tenga en cuenta que replace() en este formulario solo cambia la primera aparición de la subcadena. Si desea cambiar todas las apariciones, puede utilizar replaceAll():

let quote = "To be or not to be";

quote = quote.replaceAll("be", "code");

console.log(quote);
