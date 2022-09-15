// Tipos de datos y estructuras de datos JavaScript #ff0

// Todos los lenguajes de programación tienen estructuras de datos incorporadas, pero a menudo difieren de un lenguaje a otro. En este artículo se intenta enumerar las estructuras de datos integradas disponibles en JavaScript y las propiedades que tienen. Estos se pueden utilizar para construir otras estructuras de datos. Siempre que es posible, se hacen comparaciones con otros idiomas.

// Escritura dinámica #008000

// JavaScript es un lenguaje dinámico y de tipo libre. Las variables en JavaScript no están directamente asociadas con ningún tipo de valor en particular, y a cualquier variable se le pueden asignar (y reasignar) valores de todos los tipos:

let foo = 42; //  foo es ahora un número

console.log(foo);

foo = "Bar"; // foo es ahora una cadena

console.log(foo);

foo = true; // foo es ahora un booleano

console.log(foo);

// Tipos de datos en Javascript #008000
// El conjunto de tipos en el lenguaje JavaScript consiste en valores y objetos primitivos.

// valores primitivos (dato inmutable representado directamente en el nivel más bajo del lenguaje):

// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type

// Objects (colecciones de propiedades)

// Valores primitivos #008000

// Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo, las cadenas son inmutables. Nos referimos a los valores de estos tipos como "valores primitivos".".

// Tipo booleano
// Boolean representa una entidad lógica y puede tener dos valores: true y false.

// Tipo null
// El tipo Null tiene exactamente un valor: null. El valor null representa la ausencia intencional de cualquier valor objeto. Eso es uno de los JavaScript valores primitivos y es tratado como falsedad para operaciones booleanas.

// Tipo undefined
// Una variable a la que no se le ha asignado un valor tiene el valor undefined.

// Tipos numéricos
// ECMAScript tiene dos tipos numéricos integrados: Number y BigInt, junto con el valor relacionado NaN.

// Tipo BigInt
// El tipo BigInt es una primitiva numérica en JavaScript que puede representar enteros con precisión arbitraria. Con BigInts, puede almacenar y operar de forma segura en enteros grandes incluso más allá del límite de enteros seguros para Numbers.

// Puede usar los operadores +, *, -, ** y % con BigInts, al igual que con Numbers. Un BigInt no es estrictamente igual a un Número, pero lo es vagamente.

// Un BigInt se comporta como un Número en los casos en que se convierte a booleano: if, ||, &&, Boolean, !.

// BigInts no se puede operar indistintamente con Numbers. En su lugar, se lanzará un TypeError.

// Nan
// NaN ("Not a Number") se encuentra típicamente cuando el resultado de una operación aritmética no se puede expresar como un número. También es el único valor en JavaScript que no es igual a sí mismo.

// Tipo de cadena
// El tipo String de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento de la Cadena ocupa una posición en la Cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.

// Las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.

// Sin embargo, todavía es posible crear otra cadena basada en una operación en la cadena original. Por ejemplo:

// Una subcadena del original eligiendo letras individuales o usando substring().
// Una concatenación de dos cadenas utilizando el operador de concatenación (+) o concat().
// ¡Cuidado con "escribir con cadenas" tu código!
// Puede ser tentador usar cadenas para representar datos complejos. Hacer esto viene con beneficios a corto plazo:

// Es fácil construir cadenas complejas con concatenación.
// Las cadenas son fáciles de depurar (lo que ves impreso es siempre lo que hay en la cadena).
// Las cadenas son el denominador común de muchas API (campos de entrada, valores de almacenamiento local, respuestas XMLHttpRequest cuando se usa responseText, etc.) y puede ser tentador trabajar solo con cadenas.
// Con las convenciones, es posible representar cualquier estructura de datos en una cadena. Esto no lo convierte en una buena idea. Por ejemplo, con un separador, uno podría emular una lista (mientras que una matriz de JavaScript sería más adecuada). Desafortunadamente, cuando el separador se usa en uno de los elementos de la "lista", entonces, la lista se rompe. Se puede elegir un personaje de escape, etc. Todo esto requiere convenciones y crea una carga de mantenimiento innecesaria.

// Utilice cadenas para los datos textuales. Al representar datos complejos, analice cadenas y utilice la abstracción adecuada.

// Tipo Symbol

// Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad Object (véase más adelante). En algunos lenguajes de programación, los símbolos se llaman "átomos".
