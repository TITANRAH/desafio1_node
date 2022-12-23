const { registrar, leer, vaciar } = require("./operaciones");

const [operacion, nombreJson, nombre, edad, tipo, color, enfermedad] =
  process.argv.slice(3);

if (operacion === "registrar") {
  registrar(nombreJson, nombre, edad, tipo, color, enfermedad);
}

if (operacion === "leer") {
  leer(nombreJson);
}

if (operacion === "vaciar") {
  vaciar(nombreJson);
}
