const edad = require('../source/calcularEdad') 

const fechaNacimiento = "2000-05-05"; // Formato: AAAA-MM-DD
const resultado = edad.calcularEdad(fechaNacimiento);

console.log("La persona tiene", resultado, "años");