const { generarTanda } = require("./carrera");

const carrera = require(__dirname + "/carrera.js");

//console.log(carrera.autos);
/*
console.log("------------------------------------------------");
console.log("---------------autosHabilitados-----------------");
console.log("------------------------------------------------");
console.log(carrera.autosHabilitados());
*/
console.log("------------------------------------------------");
console.log("------------------listarAutos-------------------");
console.log("------------------------------------------------");
carrera.listarAutos(carrera.autos);
/*
console.log("------------------------------------------------");
console.log("---------------buscarPorPatente-----------------");
console.log("------------------------------------------------");
console.log(carrera.buscarPorPatente("RGB159"));

console.log("------------------------------------------------");
console.log("--------------buscarPorCilindrada---------------");
console.log("------------------------------------------------");
console.log(carrera.buscarPorCilindrada(1500));

console.log("------------------------------------------------");
console.log("--------------ordenarPorVelocidad---------------");
console.log("------------------------------------------------");
console.log(carrera.ordenarPorVelocidad());

console.log("------------------------------------------------");
console.log("--------------generarTanda---------------");
console.log("------------------------------------------------");
console.log(carrera.generarTanda(1500, 1700));

console.log("------------------------------------------------");
console.log("--------------listarPodio---------------");
console.log("------------------------------------------------");
carrera.listarPodio(1500, 1700);
*/