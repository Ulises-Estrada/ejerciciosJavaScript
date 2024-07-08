// Funciones Curso JavaScript: 34. Ejercicios de Lógica de Programación ( 1 / 10 )

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
export function contarCaracteres(cadena) {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha definido la cadena de texto o ésta es nula");
  } else if (cadena === true || cadena === false) {
    throw new Error("Ingresó un booleano");
  } else if (cadena === "\n" || cadena === "\t") {
    throw new Error("Ingresó un salto de línea o tabulación");
  } else if (cadena === "") {
    throw new Error("La cadena de texto está vacía");
  } else if (!isNaN(cadena)) {
    throw new Error("La cadena de texto es un número");
  } else if (typeof cadena !== "string") {
    throw new Error("La entrada debe ser una cadena de texto");
  } else {
    console.log(cadena.length);
  }
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
export function recortarTexto(cadena, caracteres) {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha definido la cadena de texto o ésta es nula");
  } else if (cadena === true || cadena === false) {
    throw new Error("Ingresó un booleano");
  } else if (cadena === "\n" || cadena === "\t") {
    throw new Error("Ingresó un salto de línea o tabulación");
  } else if (cadena === "") {
    throw new Error("La cadena de texto está vacía");
  } else if (!isNaN(cadena)) {
    throw new Error("La cadena de texto es un número");
  } else if (typeof cadena !== "string") {
    throw new Error("La entrada debe ser una cadena de texto");
  } else {
    let subcadena = "";
    for (let i = 0; i < caracteres; i++) {
      subcadena += cadena[i];
    }
    console.log(subcadena);
  }
}

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
export function arrayTextos(cadena, caracter) {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha definido la cadena de texto o ésta es nula");
  } else if (cadena === true || cadena === false) {
    throw new Error("Ingresó un booleano");
  } else if (cadena === "\n" || cadena === "\t") {
    throw new Error("Ingresó un salto de línea o tabulación");
  } else if (cadena === "") {
    throw new Error("La cadena de texto está vacía");
  } else if (!isNaN(cadena)) {
    throw new Error("La cadena de texto es un número");
  } else if (typeof cadena !== "string") {
    throw new Error("La entrada debe ser una cadena de texto");
  } else {
    console.log(cadena.split(caracter));
  }
}

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
export function repetirTexto(cadena, veces) {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha definido la cadena de texto o ésta es nula");
  } else if (cadena === true || cadena === false) {
    throw new Error("Ingresó un booleano");
  } else if (cadena === "\n" || cadena === "\t") {
    throw new Error("Ingresó un salto de línea o tabulación");
  } else if (cadena === "") {
    throw new Error("La cadena de texto está vacía");
  } else if (!isNaN(cadena)) {
    throw new Error("La cadena de texto es un número");
  } else if (typeof cadena !== "string") {
    throw new Error("La entrada debe ser una cadena de texto");
  } else {
    let textosRepetidos = "";
    for (let i = 0; i < veces; i++) {
      textosRepetidos += cadena;
      textosRepetidos += " ";
    }
    console.log(textosRepetidos);
  }
}
