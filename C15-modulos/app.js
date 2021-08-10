const baseDatos = require("./db");
const miConsole = require("./miConsole");
const obj = {
    numero: 123,
}
/*
console.log("-----------baseDatos----------");
console.log(baseDatos);
console.log("-----------miConsole baseDatos----------");
miConsole.miLogArrays(baseDatos);

console.log("-----------obj----------");
console.log(obj);
console.log("-----------miConsole obj----------");
miConsole.miLog(obj);
*/
console.log("-----------baseDatos----------");
miConsole.miLogLindo(baseDatos);
console.log("-----------miConsole baseDatos----------");
miConsole.miLogArrays(baseDatos);
