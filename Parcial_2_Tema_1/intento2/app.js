const consultorio = require(__dirname + "/consultorio");


//console.log(consultorio.profesionales);
/*
console.log("------------------------------------------------");
console.log("-------------mostrarUnProfesional---------------");
console.log("------------------------------------------------");
console.table([consultorio.mostrarUnProfesional(consultorio.profesionales[0])]);
*/
console.log("------------------------------------------------");
console.log("-------------listarTodos---------------");
console.log("------------------------------------------------");
console.table(consultorio.listarTodos(consultorio.profesionales));
/*
console.log("------------------------------------------------");
console.log("-------------filtrarHabilitados---------------");
console.log("------------------------------------------------");
const filtradosPorHabilitacion = consultorio.filtrarHabilitados(true);
consultorio.listarTodos(filtradosPorHabilitacion);

console.log("------------------------------------------------");
console.log("-------------buscarPorNombre---------------");
console.log("------------------------------------------------");
const profesionalPorNombre = consultorio.buscarPorNombre("Huber Wilkins");
console.table([consultorio.mostrarUnArrayDeProfesionales(profesionalPorNombre)]);

console.log("------------------------------------------------");
console.log("-------------incrementarHonorarios--------------");
console.log("------------------------------------------------");
const profesionalConHonorarioIncrementado = consultorio.incrementarHonorarios("Huber Wilkins", 50);
console.log(profesionalConHonorarioIncrementado);
*/
