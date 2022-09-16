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

