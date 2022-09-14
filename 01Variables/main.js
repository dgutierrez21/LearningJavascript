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

// // Una nota sobre las reglas de denominación de las variables: #008000
// Puede llamar a una variable casi todo lo que quiera, pero hay limitaciones. En general, debe seguir usando solo caracteres latinos ( 0 - 9, a - z, A - Z ) y el carácter de subrayado.

// No debe usar otros personajes porque pueden causar errores o ser difíciles de entender para una audiencia internacional.

// No use guiones bajos al comienzo de los nombres de variables —, esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede ser confuso.

// No use números al comienzo de las variables. Esto no está permitido y causa un error.

// Una convención segura a la que se apega se llama así - "caja de camello inferior", donde se mantienen juntas varias palabras, usando minúsculas para toda la primera palabra y luego capitalizan las palabras posteriores. Hemos estado usando esto para nuestros nombres de variables en el artículo hasta ahora.

// Haga que los nombres de variables sean intuitivos, para que describan los datos que contienen. No solo use letras / números individuales o frases largas grandes.

// Las variables son sensibles a mayúsculas y minúsculas —, por lo que myage es una variable diferente de myAge.

// Un último punto: también debe evitar usar palabras reservadas de JavaScript como sus nombres de variables — con esto, ¡nos referimos a las palabras que componen la sintaxis real de JavaScript! Entonces, no puedes usar palabras como var, function, let, y for como nombres de variables. Los navegadores los reconocen como diferentes elementos de código, por lo que obtendrá errores.

// Nota: Puede encontrar una lista bastante completa de palabras clave reservadas para evitar en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// Buenos ejemplos de nombres:

// age
// myAge
// init
// initialColor
// finalOutputValue
// audio1
// audio2

// Ejemplos de mal nombre:

// 1
// a
// _12
// myage
// MYAGE
// var
// Document
// skjfndskjfnbdskjfb
// thisisareallylongvariablenameman

// Tipos de variables #008000

// Hay algunos tipos diferentes de datos que podemos almacenar en variables. En esta sección describiremos estos en breve, luego en futuros artículos, aprenderá sobre ellos con más detalle.

// Hasta ahora hemos visto los dos primeros, pero hay otros.

// Números
// Puede almacenar números en variables, ya sea números enteros como 30 (también llamados enteros) o números decimales como 2.456 (también llamados flotadores o números de coma flotante). No es necesario declarar tipos de variables en JavaScript, a diferencia de otros lenguajes de programación. Cuando le das a una variable un valor numérico, no incluyes comillas:

let num1 = 17;
console.log(num1);

// Cadenas
// Las cadenas son fragmentos de texto. Cuando se le da a una variable un valor de cadena, es necesario envolverla entre comillas simples o dobles; de lo contrario, JavaScript intenta interpretarlo como otro nombre de variable.

let goodBye = "Bye, see you later";

console.log(goodBye);

// Booleanos
// Los booleanos son valores verdaderos/falsos: pueden tener dos valores, true o false. Estos generalmente se usan para probar una condición, después de lo cual el código se ejecuta según corresponda. Así, por ejemplo, un caso simple sería:

let iAmLearningJavascript = true;

console.log(iAmLearningJavascript);

// Mientras que en realidad se usaría más así:

let test = 6 < 3;

console.log(test);

// Esto es usar el operador "menos que" (<) para probar si 6 es menor que 3. Como era de esperar, devuelve false, ¡porque 6 no es menos de 3!

// Matrices
// Una matriz es un objeto único que contiene varios valores entre corchetes y separados por comas. Intente introducir las siguientes líneas en la consola:

let myNameArray = ["Chris", "Bob", "Jim"];

let myNumberArray = [5, 10, 15];
// Una vez definidas estas matrices, puede acceder a cada valor por su ubicación dentro de la matriz. Pruebe estas líneas:

console.log(myNameArray);

console.log(myNameArray[0]);

console.log(myNumberArray);

console.log(myNumberArray[2]);

// Los corchetes especifican un valor de índice correspondiente a la posición del valor que desea devolver. Es posible que haya notado que las matrices en JavaScript tienen índice cero: el primer elemento está en el índice 0.

// Objetos
// En programación, un objeto es una estructura de código que modela un objeto de la vida real. Puede tener un objeto simple que represente un cuadro y contenga información sobre su ancho, longitud y altura, o puede tener un objeto que represente a una persona y contenga datos sobre su nombre, altura, peso, qué idioma habla, cómo saludarlos y más.

// Intente introducir la siguiente línea en la consola:

let car = {
  brand: "Mclaren",
  model: "720s",
  motor: "v8",
  performance: "0 to 100 km/h (62 mph) in 2.9 seconds",
};

// Para recuperar la información almacenada en el objeto, puede utilizar la sintaxis siguiente:

console.log(car.motor);
console.log(car.performance);

// Escritura dinámica #008000

// JavaScript es un "lenguaje de tipo dinámico", lo que significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá una variable (números, cadenas, matrices, etc.).

// Por ejemplo, si declara una variable y le da un valor entre comillas, el explorador trata la variable como una cadena:

let myString = "Hello";
console.log(myString);

// Incluso si el valor entre comillas es solo dígitos, sigue siendo una cadena, no un número, así que tenga cuidado:

let myNumber = "720"; // oops, esto sigue siendo una cadena

console.log(typeof myNumber);

myNumber = 650; // mucho mejor - ahora esto es un número

console.log(typeof myNumber);

// Intente ingresar las cuatro líneas anteriores en su consola una por una y vea cuáles son los resultados. Notarás que estamos usando un operador especial llamado typeof, que devuelve el tipo de datos de la variable que escribes después de él. La primera vez que se llama, debe devolver string, ya que en ese momento la variable myNumber contiene una cadena, '500'. Echa un vistazo y mira lo que devuelve la segunda vez que lo llamas.

// Constantes en JavaScript #008000
// Además de las variables, puede declarar constantes. Estas son como variables, excepto que:

// Debe inicializarlos cuando los declare
// no puede asignarles un nuevo valor después de haberlos inicializado.

// Por ejemplo, usando let puede declarar una variable sin inicializarla:

let count;

// Si intenta hacer esto usando const, verá un error:

// const count2; // Uncaught SyntaxError: Missing initializer in const declaration (at main.js:286:7)

// Del mismo modo, con let puede inicializar una variable y luego asignarle un nuevo valor (esto también se llama reasignación de la variable):

let count3 = 1;

count3 = 3;

console.log(count3);

// Si intenta hacer esto usando const, verá un error:

const count4 = 1;

// count4 = 3; // Uncaught TypeError: Assignment to constant variable.

// Tenga en cuenta que aunque una constante en JavaScript siempre debe nombrar el mismo valor, puede cambiar el contenido del valor que nombra. Esta no es una distinción útil para tipos simples como números o booleanos, pero considere un objeto:

const bird = {
  species: "Kestrel",
};

console.log(bird.species);

// Puede actualizar, agregar o quitar propiedades de un objeto declarado mediante const, ya que aunque el contenido del objeto haya cambiado, la constante sigue apuntando al mismo objeto:

bird.species = "Striated Caracara";

console.log(bird.species);
