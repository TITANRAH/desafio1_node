const fs = require("fs");

const registrar = (filename, nombre, edad, tipo, color, enfermedad) => {
  let objeto = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  
  let archi = JSON.parse(fs.readFileSync(filename));
  archi.push(objeto);
  fs.writeFileSync(filename, JSON.stringify(archi));
};

const leer = (filename) => {
  const content = fs.readFileSync(filename);
  const cita = JSON.parse(content);
  console.log(cita);
};

const vaciar = (filename) => {
  fs.writeFileSync(filename, '[]');
}

module.exports = {
  registrar,
  leer,
  vaciar
};
