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

// Objects #008000
// En informática, un objeto es un valor en la memoria al que posiblemente se hace referencia mediante un identificador..

// En JavaScript, los objetos se pueden ver como una colección de propiedades. Con la sintaxis literal del objeto, se inicializa un conjunto limitado de propiedades; luego se pueden agregar y eliminar propiedades. Los valores de propiedad pueden ser valores de cualquier tipo, incluidos otros objetos, lo que permite crear estructuras de datos complejas. Las propiedades se identifican mediante valores clave. Un valor de clave es un valor String o un valor Symbol.

// Hay dos tipos de propiedades de objeto: la propiedad data y la propiedad accessor. Cada propiedad tiene los atributos correspondientes.

// Propiedad Data
// Las propiedades de datos asocian una clave a un valor. Se puede describir mediante los siguientes atributos:

// value
// El valor recuperado por un get access de la propiedad. Puede ser cualquier valor de JavaScript.

// writable
// Valor booleano que indica si la propiedad se puede cambiar con una asignación.

// enumerable
// Un valor booleano que indica si la propiedad puede ser enumerada por un for...in bucle. Consulte también Enumerabilidad y propiedad de propiedades para saber cómo interactúa la enumerabilidad con otras funciones y sintaxis.

// configurable
// Un valor booleano que indica si la propiedad se puede eliminar, se puede cambiar a una propiedad accesoria y se pueden cambiar sus atributos.

// Propiedad Accessor
// Asocia una clave con una de las dos funciones de descriptor de get y set) para recuperar o almacenar un valor.

// Nota: Es importante reconocer su propiedad de accesorio, no su método de accesorio. Podemos dar a un objeto JavaScript descriptores de acceso similares a una clase usando una función como valor, pero eso no hace que el objeto sea una clase.

// Una propiedad accessor tiene los siguientes atributos:

// get
// Función a la que se llama con una lista de argumentos vacía para recuperar el valor de la propiedad cada vez que se realiza un acceso obtentor al valor. Véase también getters. Puede ser undefined.

// set
// Función llamada con un argumento que contiene el valor asignado. Se ejecuta cada vez que se intenta cambiar una propiedad especificada. Véase también setters. Puede ser undefined.

// enumerable
// Un valor booleano que indica si la propiedad puede ser enumerada por un for...in bucle. Consulte también Enumerabilidad y propiedad de propiedades para saber cómo interactúa la enumerabilidad con otras funciones y sintaxis.

// configurable
// Un valor booleano que indica si la propiedad se puede eliminar, se puede cambiar a una propiedad de datos y se pueden cambiar sus atributos.

// Objetos y funciones "normales"
// Un objeto JavaScript es una asignación entre claves y valores. Las claves son cadenas (o símbolos), y los valores pueden ser cualquier cosa. Esto hace que los objetos sean un ajuste natural para hashmaps..

// Las funciones son objetos regulares con la capacidad adicional de ser invocables.

// Fechas
// Al representar fechas, la mejor opción es usar la utilidad Date incorporada en JavaScript.

// Colecciones indexadas: Arrays and typed Arrays

// Las matrices son objetos regulares para los que existe una relación particular entre las propiedades de clave entera y la propiedad length.

// Además, las matrices heredan de Array.prototype, que les proporciona un puñado de métodos convenientes para manipular matrices. Por ejemplo, indexOf() (buscar un valor en la matriz) o push() (agregar un elemento a la matriz), etc. Esto hace que Arrays sea un candidato perfecto para representar listas o conjuntos.

// Las matrices con tipo presentan una vista similar a una matriz de un búfer de datos binario subyacente y ofrecen muchos métodos que tienen una semántica similar a las contrapartes de la matriz. "Matriz tipada" es un término general para una variedad de estructuras de datos, incluidas Int8Array, Float32Array, etc. Consulte la página de matriz con tipo para obtener más información.

// Colecciones con claves: Maps, Sets, WeakMaps, WeakSets

// Estas estructuras de datos toman referencias de objetos como claves. Set y WeakSet representan un conjunto de objetos, mientras que Map y WeakMap asocian un valor a un objeto.

// La diferencia entre Maps y WeakMaps es que en el primero, las claves de objeto se pueden enumerar. Esto permite optimizaciones de recolección de basura en este último caso.

// Puede implementar Maps y Sets usted mismo. Sin embargo, dado que los objetos no se pueden comparar (en el sentido de < "menos que", por ejemplo), ni el motor expone su función hash para los objetos, el rendimiento de búsqueda sería necesariamente lineal. Las implementaciones nativas de ellos (incluido WeakMaps) pueden tener un rendimiento de búsqueda que es aproximadamente logarítmico a tiempo constante.

// Por lo general, para enlazar datos a un nodo DOM, se pueden establecer propiedades directamente en el objeto o usar atributos data-*. Esto tiene la desventaja de que los datos están disponibles para cualquier script que se ejecute en el mismo contexto. Maps y WeakMaps facilitan el enlace privado de datos a un objeto.

// Datos estructurados: JSON
// JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, derivado de JavaScript, pero utilizado por muchos lenguajes de programación. JSON construye estructuras de datos universales.

// Consulte JSON y JSON para obtener más detalles.

// Más objetos en la biblioteca estándar
// JavaScript tiene una biblioteca estándar de objetos integrados.

// Por favor, eche un vistazo a la referencia para obtener más información sobre más objetos.

