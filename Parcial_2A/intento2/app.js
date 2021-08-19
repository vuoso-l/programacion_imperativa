const catalogoTrabajadores = require(__dirname + "/catalogoTrabajadores.js");

//console.log(catalogoTrabajadores.trabajadores);

console.log("------------------------------------------------");
console.log("-------------mostrarUnTrabajador---------------");
console.log("------------------------------------------------");
catalogoTrabajadores.mostrarUnTrabajador(catalogoTrabajadores.trabajadores[0]);
/*
console.log("------------------------------------------------");
console.log("------------------mostrarTodos------------------");
console.log("------------------------------------------------");
catalogoTrabajadores.mostrarTodos(catalogoTrabajadores.trabajadores);

console.log("------------------------------------------------");
console.log("----------------filtrarPorRating----------------");
console.log("------------------------------------------------");
const trabajadoresPorRating = catalogoTrabajadores.filtrarPorRating(3);
catalogoTrabajadores.mostrarTodos(trabajadoresPorRating);
*/
console.log("------------------------------------------------");
console.log("------------------buscarPorId-------------------");
console.log("------------------------------------------------");
const trabajadorPorId = catalogoTrabajadores.buscarPorId(11);
catalogoTrabajadores.mostrarUnTrabajador(trabajadorPorId);
/*
console.log("------------------------------------------------");
console.log("---------incrementarConsultasRealizadas---------");
console.log("------------------------------------------------");
console.log(catalogoTrabajadores.incrementarConsultasRealizadas(1, 15));
*/
