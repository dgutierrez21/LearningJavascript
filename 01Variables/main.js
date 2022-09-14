// Almacenamiento de la información que necesita — Variables #ff0

// ¿Qué es una variable?#008000
// Una variable es un contenedor de un valor, como un número que podríamos usar en una suma o una cadena que podríamos usar como parte de una oración.

// Ejemplo de variable
// Veamos un ejemplo sencillo:

const buttonA = document.querySelector(".btn_1"),
  headingA = document.querySelector(".h2_1");

buttonA.onclick = () => {
  const name = prompt("What is your name");
  alert(`Hello ${name}, nice to see you`);
  headingA.textContent = `Welcome ${name}`;
};

// En este ejemplo, al presionar el botón se ejecuta un código. La primera línea abre un cuadro en la pantalla que le pide al lector que ingrese su nombre y luego almacena el valor en una variable. La segunda línea muestra un mensaje de bienvenida que incluye su nombre, tomado del valor de la variable y la tercera línea muestra ese nombre en la página.

// sin variable
// Para entender por qué esto es tan útil, pensemos cómo escribiríamos este ejemplo sin usar una variable. Terminaría luciendo algo como esto:

const buttonB = document.querySelector(".btn_2"),
  headingB = document.querySelector(".h2_2");

buttonB.onclick = () => {
  alert(`Hello ${prompt("What is your name?")}, nice to see you!`);
  headingB.textContent = `Welcome ${prompt("What is your name?")}`;
};

// Es posible que no comprenda completamente la sintaxis que estamos usando (¡todavía!), pero debería poder hacerse una idea. Si no tuviéramos variables disponibles, ¡tendríamos que pedirle al lector su nombre cada vez que necesitáramos usarlo!

// Las variables simplemente tienen sentido y, a medida que aprenda más sobre JavaScript, comenzarán a convertirse en una segunda naturaleza.

// Una cosa especial acerca de las variables es que pueden contener casi cualquier cosa, no solo cadenas y números. Las variables también pueden contener datos complejos e incluso funciones completas para hacer cosas increíbles. Aprenderá más sobre esto a medida que avanza.

// Nota: Decimos que las variables contienen valores. Esta es una distinción importante que hacer. Las variables no son los valores en sí mismos; son contenedores de valores. Puedes pensar en ellos como pequeñas cajas de cartón en las que puedes guardar cosas.

// Declarar una variable #008000
// Para usar una variable, primero debe crearla; de manera más precisa, llamamos a esto declarar la variable. Para ello, escribimos la palabra clave let seguida del nombre con el que queremos llamar a nuestra variable:

let myName;
let myAge;

// Aquí estamos creando dos variables llamadas myName y myAge. Intente escribir estas líneas en la consola de su navegador web. Después de eso, intente crear una variable (o dos) con sus propias opciones de nombre.

// Nota: En JavaScript, todas las instrucciones de código deben terminar con un punto y coma (;): el código puede funcionar correctamente para líneas individuales, pero probablemente no lo hará cuando escriba varias líneas de código juntas. Trate de adquirir el hábito de incluirlo.

// Puede probar si estos valores existen ahora en el entorno de ejecución escribiendo solo el nombre de la variable, por ejemplo.

myName;

// Actualmente no tienen valor; son contenedores vacíos. Al introducir los nombres de las variables, debe obtener un valor de undefined devuelto. Si no existen, recibirás un mensaje de error: intenta escribir

console.log(myName); // Undefined

// scobyDoo; // Uncaught ReferenceError: ScobyDoo is not defined

// #FF0000
// Nota: No confundas una variable que existe pero no tiene un valor definido con una variable que no existe en absoluto, son cosas muy diferentes. En la analogía de la caja que viste anteriormente, no existir significaría que no hay una caja (variable) para que entre un valor. Ningún valor definido significaría que hay una caja, pero no tiene valor dentro de ella.

// Inicialización de una variable #008000
// Una vez que haya declarado una variable, puede inicializarla con un valor. Para ello, escriba el nombre de la variable, seguido de un signo igual (=), seguido del valor que desea asignarle. Por ejemplo:

myName = "Jhon";
myAge = 36;

console.log(myName);
console.log(myAge);

// Intente volver a la consola ahora y escriba estas líneas. Debería ver el valor que ha asignado a la variable devuelta en la consola para confirmarlo, en cada caso. Una vez más, puede devolver los valores de las variables escribiendo su nombre en la consola; inténtelos de nuevo:

// Puede declarar e inicializar una variable al mismo tiempo, de la siguiente manera:

let myDog = "Rover";

console.log(myDog);

// Esto es probablemente lo que harás la mayor parte del tiempo, ya que es más rápido que hacer las dos acciones en dos líneas separadas.

// Una nota sobre var #008000
// Probablemente también verá una forma diferente de declarar variables, utilizando la palabra clave var:

var myName2;

// Cuando se creó JavaScript por primera vez, esta era la única forma de declarar variables. El diseño de var es confuso y error - propenso. Entonces let fue creado en versiones modernas de JavaScript, una nueva palabra clave para crear variables que funciona de manera algo diferente a var, arreglando sus problemas en el proceso.

// A continuación se explican un par de diferencias simples.

// Para empezar, si escribe un programa JavaScript multilínea que declara e inicializa una variable, puede declarar una variable con var después de inicializarlo y seguirá funcionando. Por ejemplo:

myName3 = "Chris";

console.log(myName3);

var myName3;

// Nota: Esto no funcionará al escribir líneas individuales en una consola de JavaScript, solo cuando se ejecutan varias líneas de JavaScript en un documento web.

// Esto funciona gracias al hoisting --- leer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting para más detalles sobre el tema.

// El hoisting ya no funciona con let. Si cambiamos var a let en el ejemplo anterior, fallaría con un error. Esto es algo bueno — declarar una variable después de inicializarla resulta en un código confuso y más difícil de entender.

// En segundo lugar, cuando usas var, puede declarar la misma variable tantas veces como desee, pero con let no puedes. Lo siguiente funcionaría:

var myName4 = "Juan";
var myName4 = "Hector";

console.log(myName4);

// Pero lo siguiente arrojaría un error en la segunda línea:

// let myName5 = "Chris";
// let myName5 = "Bob"; // Uncaught SyntaxError: Identifier 'myName5' has already been declared (at main.js:114:5)

// Tendrías que hacer esto en su lugar:

let myName6 = "Chris";
myName6 = "Bob";

console.log(myName6);

// Nuevamente, esta es una decisión sensata del lenguaje. No hay ninguna razón para canjear variables —, solo hace las cosas más confusas.

// Por estas razones y más, le recomendamos que use let en su código, en lugar de var. No hay razón para usar var, a menos que necesite admitir Internet Explorer 10 o anterior con su código.

// Nota: Si está probando este código en la consola de su navegador, prefiera copiar y pegar cada uno de los bloques de código aquí en su conjunto. Hay un característica en la consola de Chrome donde las declaraciones variables - con let y const están permitidos:

// > let myName = 'Chris';
//   let myName = 'Bob';
// As one input: SyntaxError: Identifier 'myName' has already been declared

// > let myName = 'Chris';
// > let myName = 'Bob';
// As two inputs: both succeed

// Actualizando una variable #008000
// Una vez que una variable se ha inicializado con un valor, puede cambiar ( o actualizar ) ese valor dándole un valor diferente. Intente ingresar las siguientes líneas en su consola:

myName7 = "Bob"; // Cambie el valor de esta variable cuantas veces quiera
myAge7 = 40; // Cambie el valor de esta variable cuantas veces quiera

