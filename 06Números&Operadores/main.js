// A todo el mundo le encantan las matemáticas #008000
// De acuerdo, tal vez no. A algunos de nosotros nos gustan las matemáticas, algunos de nosotros hemos odiado las matemáticas desde que tuvimos que aprender tablas de multiplicar y división larga en la escuela, y algunos de nosotros nos sentamos en algún lugar entre los dos. Pero ninguno de nosotros puede negar que las matemáticas son una parte fundamental de la vida sin la que no podemos llegar muy lejos. Esto es especialmente cierto cuando estamos aprendiendo a programar JavaScript (o cualquier otro lenguaje para el caso): gran parte de lo que hacemos se basa en el procesamiento de datos numéricos, el cálculo de nuevos valores, etc., que no se sorprenderá al saber que JavaScript tiene un conjunto completo de funciones matemáticas disponibles.

// Este artículo discute solo las partes básicas que necesita saber ahora.

// Tipos de números #00aae4
// En programación, incluso el humilde sistema de números decimales que todos conocemos tan bien es más complicado de lo que se podría pensar. Usamos diferentes términos para describir diferentes tipos de números decimales, por ejemplo:

// Los enteros son números de coma flotante sin fracción. Pueden ser positivos o negativos, por ejemplo, 10, 400 o -5.

// Los números de coma flotante (floats) tienen puntos decimales y decimales, por ejemplo, 12.5 y 56.7786543.

// Los dobles son un tipo específico de número de coma flotante que tienen mayor precisión que los números de coma flotante estándar (lo que significa que son precisos a un mayor número de decimales).

// ¡Incluso tenemos diferentes tipos de sistemas numéricos! Decimal es base 10 (lo que significa que usa 0–9 en cada columna), pero también tenemos cosas como:

// Binario — El lenguaje de nivel más bajo de las computadoras; 0s y 1s.
// Octal — Base 8, usa 0–7 en cada columna.
// Hexadecimal — Base 16, usa 0–9 y luego a–f en cada columna. Es posible que haya encontrado estos números antes al establecer colores en CSS.

// Antes de que comiences a preocuparte por el derretimiento de tu cerebro, ¡detente allí mismo! Para empezar, vamos a ceñirnos a los números decimales a lo largo de este curso; rara vez te encontrarás con la necesidad de comenzar a pensar en otros tipos, si es que alguna vez lo haces.

// La segunda buena noticia es que, a diferencia de otros lenguajes de programación, JavaScript solo tiene un tipo de datos para números, tanto enteros como decimales: lo has adivinado, Number. Esto significa que cualquiera que sea el tipo de números con los que esté tratando en JavaScript, los maneja exactamente de la misma manera.

// : En realidad, JavaScript tiene un segundo tipo de número, BigInt, utilizado para enteros muy, muy grandes. Pero para los propósitos de este curso, solo nos preocuparemos por Number.

// Todo son números para mí #00aae4
// Juguemos rápidamente con algunos números para volver a familiarizarnos con la sintaxis básica que necesitamos. Introduzca los comandos que se enumeran a continuación en la consola de JavaScript de las herramientas de desarrollo.

// En primer lugar, declaremos un par de variables e inicialicemos con un entero y un float, respectivamente, luego escribamos los nombres de las variables para verificar que todo esté en orden:

const myInt = 5;
const myFloat = 10.57;

console.log(myInt);
console.log(myFloat);

// Los valores numéricos se escriben sin comillas: intente declarar e inicializar un par de variables más que contengan números antes de continuar.
// Ahora vamos a comprobar que nuestras dos variables originales son del mismo tipo de datos. Hay un operador llamado typeof en JavaScript que hace esto. Ingrese las dos líneas a continuación como se muestra:

const myInt2 = 14;
const myFloat2 = 22.43;

console.log(typeof myInt2);
console.log(typeof myFloat2);

// Debería obtener "number" devuelto en ambos casos: esto hace que las cosas sean mucho más fáciles para nosotros que si diferentes números tuvieran diferentes tipos de datos, y tuviéramos que lidiar con ellos de diferentes maneras. ¡Ufff!

// Métodos numéricos útiles #00aae4
// El objeto Number, cuya instancia representa todos los números estándar que usará en su JavaScript, tiene una serie de métodos útiles disponibles para que pueda manipular números. No cubrimos estos en detalle en este artículo porque queríamos mantenerlo como una simple introducción y solo cubrir los elementos esenciales básicos reales por ahora; sin embargo, una vez que haya leído este módulo un par de veces, vale la pena ir a las páginas de referencia de objetos y aprender más sobre lo que está disponible.

// Por ejemplo, para redondear el número a un número fijo de decimales, utilice el método toFixed()). Escriba las siguientes líneas en la consola de su navegador:

// IMPORTANTE: tenga en cuenta que tofixed() retorna una cadena que representa el número dado #FF0000

const lotsOfDecimal = 1.82713486234;

console.log(lotsOfDecimal);

const twoDecimalPlaces = lotsOfDecimal.toFixed(2);

console.log(twoDecimalPlaces);

// Conversión a tipos de datos numéricos #00aae4
// A veces puede terminar con un número que se almacena como un tipo de cadena, lo que dificulta la realización de cálculos con él. Esto sucede más comúnmente cuando los datos se ingresan en una entrada de formulario y el tipo de entrada es texto. Hay una manera de resolver este problema: pasar el valor de cadena al constructor Number() para devolver una versión numérica del mismo valor.

// Por ejemplo, intente escribir estas líneas en la consola:

let myNumber = 75.23498348;

let myRoundedNumber = myNumber.toFixed(2);

myRoundedNumber += 3;

console.log(myRoundedNumber);

// Terminas con el resultado 75.233 , no 78.23, porque myRoundedNumber en realidad se define como una cadena. Puede probar esto escribiendo lo siguiente:

console.log(typeof myRoundedNumber);

// Para corregir el cálculo, puede hacer lo siguiente:

let myNumber2 = 75.23498348;

let myRoundedNumber2 = Number(myNumber2.toFixed(2));

console.log(myRoundedNumber2);
console.log(typeof myRoundedNumber2);

myRoundedNumber2 += 3;

console.log(myRoundedNumber2);

// El resultado es entonces de 78.23, como se esperaba inicialmente.

// Operadores aritméticos #008000
// Los operadores aritméticos son los operadores básicos que utilizamos para hacer sumas en JavaScript:

// ver imagen...

// Probablemente no necesitemos enseñarle cómo hacer matemáticas básicas, pero nos gustaría probar su comprensión de la sintaxis involucrada. Intente ingresar los ejemplos a continuación en la consola de JavaScript de su herramienta de desarrollo para familiarizarse con la sintaxis.

// Primero intente ingresar algunos ejemplos simples propios, como

console.log(10 + 7);
console.log(5 * 3);
console.log(8 % 3);

// También puede intentar declarar e inicializar algunos números dentro de las variables, e intentar usarlos en las sumas: las variables se comportarán exactamente como los valores que tienen para los fines de la suma. Por ejemplo:

const num1 = 10;
const num2 = 50;

console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 / num1);

// Por último, en esta sección, intente introducir algunas expresiones más complejas, como:

console.log(5 + 10 * 3);

console.log((num2 % 9) * num1);

console.log(num2 + num1 / 8 + 2);

// Es posible que partes de este último conjunto de cálculos no le den el resultado que esperaba; la siguiente sección bien podría dar la respuesta de por qué.

// Precedencia del operador #00aae4
// Veamos el último ejemplo de arriba, asumiendo que num2 tiene el valor 50 y num1 tiene el valor 10 (como se indicó originalmente anteriormente):

console.log(num2 + num1 / 8 + 2);

// Como ser humano, puedes leer esto como "50 más 10 es igual a 60", luego "8 más 2 es igual a 10" y finalmente "60 dividido por 10 es igual a 6"..

// Pero el navegador hace "10 dividido por 8 es igual a 1.25", luego "50 más 1.25 más 2 es igual a 53.25".

// Esto se debe a la precedencia del operador: algunos operadores se aplican antes que otros al calcular el resultado de un cálculo (denominado expresión, en programación). La precedencia del operador en JavaScript es la misma que se enseña en las clases de matemáticas en la escuela: multiplicar y dividir siempre se hacen primero, luego sumar y restar (el cálculo siempre se evalúa de izquierda a derecha).

// Si desea anular la precedencia del operador, puede poner paréntesis alrededor de las partes que desea que se traten explícitamente primero. Entonces, para obtener un resultado de 6, podríamos hacer esto:

console.log((num2 + num1) / (8 + 2));

// NOTA: Se puede encontrar una lista completa de todos los operadores de JavaScript y su precedencia en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence

// Operadores de incremento y decremento. #008000
// A veces, querrá sumar o restar repetidamente uno hacia o desde un valor de variable numérico. Esto se puede hacer convenientemente usando el incremento (++) y decremento (--Operadores ). Nosotros usamos ++ en nuestro juego "Adivina el número" en nuestro primer salpicadura en JavaScript artículo, cuando agregamos 1 a nuestro guessCount variable para realizar un seguimiento de cuántas conjeturas le queda al usuario después de cada turno.

// guessCount++;
// Intentemos jugar con estos en su consola. Para empezar, tenga en cuenta que no puede aplicarlos directamente a un número, lo que puede parecer extraño, pero estamos asignando a una variable un nuevo valor actualizado, que no funciona con el valor en sí. Lo siguiente devolverá un error:

// console.log(3++);

// Entonces, solo puede incrementar una variable existente. Prueba esto:

let num3 = 4;
num3++;

console.log(num3);

// ¡Está bien, extrañeza número 2! Cuando haga esto, verá un valor de 4 devuelto, esto se debe a que el navegador devuelve el valor actual y luego incrementa la variable. Puede ver que se ha incrementado si devuelve el valor de la variable nuevamente:

// Lo mismo ocurre con -- : pruebe lo siguiente

let num4 = 8;
num4--;
num4;

console.log(num4);

// Nota: Puede hacer que el navegador lo haga al revés (incrementar / disminuir la variable y luego devolver el valor) colocando el operador al principio de la variable en lugar del final. Pruebe los ejemplos anteriores de nuevo, pero esta vez use ++num1 y --num2.

// Operadores de asignación #008000
// Los operadores de asignación son operadores que asignan un valor a una variable. Ya hemos utilizado el más básico, =, cargas de veces: asigna a la variable de la izquierda el valor indicado a la derecha:

let x = 3; // x contains the value 3

// Pero hay algunos tipos más complejos, que proporcionan accesos directos útiles para mantener su código más ordenado y eficiente. Los más comunes se enumeran a continuación:

// ver imagen...

// Intente escribir algunos de los ejemplos anteriores en su consola, para tener una idea de cómo funcionan. En cada caso, vea si puede adivinar cuál es el valor antes de escribir la segunda línea.

// Tenga en cuenta que puede usar felizmente otras variables en el lado derecho de cada expresión, por ejemplo:

let y = 3;
let z = 5;

console.log(y);

y *= z; // y contiene ahora el valor 15

console.log(y);

// ejemplo 2

let x1 = 50;
let z1 = 5;

x1 += z1;

console.log(x1);

// Operadores de comparación #008000
// A veces querremos ejecutar pruebas verdaderas / falsas, luego actuar en consecuencia dependiendo del resultado de esa prueba; para hacer esto, usamos operadores de comparación..

// ver imagen...

// Nota: Es posible que veas a algunas personas usando == y != en sus pruebas de igualdad y no igualdad. Estos son operadores válidos en JavaScript, pero difieren de ===/!==. Las versiones anteriores prueban si los valores son los mismos, pero no si los tipos de datos de los valores son los mismos. Estas últimas versiones estrictas prueban la igualdad tanto de los valores como de sus tipos de datos. Las versiones estrictas tienden a resultar en menos errores, por lo que le recomendamos que las use.

// Si intenta ingresar algunos de estos valores en una consola, verá que todos devuelven valores true / false, esos booleanos que mencionamos en el último artículo. Estos son muy útiles, ya que nos permiten tomar decisiones en nuestro código, y se utilizan cada vez que queremos hacer una elección de algún tipo. Por ejemplo, los booleanos se pueden usar para:

// Mostrar la etiqueta de texto correcta en un botón en función de si una función está activada o desactivada

// Mostrar un mensaje de game over si un juego ha terminado o un mensaje de victoria si el juego se ha ganado

// Muestre el saludo de temporada correcto dependiendo de la temporada navideña que sea

// Acercar o alejar un mapa en función del nivel de zoom seleccionado

// Veremos cómo codificar dicha lógica cuando veamos las declaraciones condicionales en un artículo futuro. Por ahora, veamos un ejemplo rápido:

const btn = document.querySelector(".container button"),
  txt = document.querySelector(".container p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
    txt.style.color = "green";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped!";
    txt.style.color = "red";
  }
}

// Puede ver el operador de igualdad que se está utilizando justo dentro de la función updateBtn()). En este caso, no estamos probando si dos expresiones matemáticas tienen el mismo valor, estamos probando si el contenido de texto de un botón contiene una cierta cadena, pero sigue siendo el mismo principio en funcionamiento. Si el botón está diciendo actualmente "Iniciar máquina" cuando se presiona, cambiamos su etiqueta a "Detener máquina" y actualizamos la etiqueta según corresponda. Si el botón está diciendo actualmente "Detener máquina" cuando se presiona, volvemos a cambiar la pantalla.

// Nota: Tal control que intercambia entre dos estados generalmente se conoce como un interruptor. Alterna entre un estado y otro: luz encendida, luz apagada, etc.
