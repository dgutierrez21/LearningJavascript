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

