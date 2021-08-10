const concesionaria = require(__dirname + "/concesionaria");

console.log("----------------------------------------");
console.log("------------filtrarVendidos-------------");
console.log("----------------------------------------");
const vendidosarray = concesionaria.filtrarVendidos();
console.table(vendidosarray);
/*
console.log("----------------------------------------");
console.log("---------------agregarAuto--------------");
console.log("----------------------------------------");
const autoAgregado = concesionaria.agregarAuto("ford", "ka", 2010, 1200000, "hkf014");
console.log(autoAgregado);

console.log("----------------------------------------");
console.log("---------------venderAuto---------------");
console.log("----------------------------------------");
const autoVendido = concesionaria.venderAuto("hkf014");
console.log(autoVendido);

console.log("----------------------------------------");
console.log("-------------totalDeVentas--------------");
console.log("----------------------------------------");
const totalVentas = concesionaria.totalDeVentas();
console.log(totalVentas);

console.log("----------------------------------------");
console.log("--------------eliminarAuto--------------");
console.log("----------------------------------------");
const autoEliminado = concesionaria.eliminarAuto("hkf014");
console.log(autoEliminado);
*/