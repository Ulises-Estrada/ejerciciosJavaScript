import {
  contarCaracteres,
  arrayTextos,
  recortarTexto,
  repetirTexto,
} from "./funcionesEjercicios.js";

try {
  contarCaracteres(true);
} catch (error) {
  console.error(error.message);
}
try {
  arrayTextos("hola que tal", " ");
} catch (error) {
  console.error(error.message);
}
try {
  recortarTexto("Hola Mundo", 4);
} catch (error) {
  console.error(error.message);
}
try {
  repetirTexto("Hola Mundo", 3);
} catch (error) {
  console.error(error.message);
}
