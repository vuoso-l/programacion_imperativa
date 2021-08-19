const { escribirJson } = require("./lecturaEscritura");

const archivos = require(__dirname + "/lecturaEscritura");
let JsonProfesionales = archivos.leerJson("profesionales");

//objeto literal con props y métodos
const cartillaProfs = {
  profesionales: JsonProfesionales,
  //NO modificar esto
  mostrarUnProfesional: function (profesional) {
    console.table({
      [profesional.identificador]: {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        honorarios: profesional.honorarioConsulta,
        consultas: profesional.cantidadConsultas,
        habilitado: profesional.estaHabilitado,
      },
    });
  },
  listarTodos: function (profesionalesAMostrar) {
    let vista = [];
    for (let i = 0; i < profesionalesAMostrar.length; i++) {
      vista.push(this.traerUnProfesional(profesionalesAMostrar[i]));
    }
    console.table(vista);
  },
  traerUnProfesional: function (profesional) {
    return {
      nombre: profesional.nombre,
      honorarios: "$" + profesional.honorarioConsulta,
      especialidad: profesional.especialidad,
      habilitado: profesional.estaHabilitado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
  filtrarHabilitados: function (arrayProfesionales) {
    let arrayProfesionalesHabilitados = [];

    for (let i = 0; i < arrayProfesionales.length; i++) {

      if (arrayProfesionales[i].estaHabilitado === true) {
        arrayProfesionalesHabilitados.push(arrayProfesionales[i]);

      }

    }
    return arrayProfesionalesHabilitados;
  },
  buscarPorNombre: function (nombreProfesional) {
    for (let i = 0; i < this.profesionales.length; i++) {

      if (this.profesionales[i].nombre === nombreProfesional) {
        return this.profesionales[i];
      }
      
    }
  },
  incrementarHonorarios: function (nombreProfesional, porcentajeIncrementoHonorarios) {
    let nombreProfesionalBuscado = this.buscarPorNombre(nombreProfesional);

    let porcentajeIncremento = (nombreProfesionalBuscado.honorarioConsulta * porcentajeIncrementoHonorarios) / 100;

    nombreProfesionalBuscado.honorarioConsulta += porcentajeIncremento;

    let arrayProfesionalesModificado = [];
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i] === nombreProfesionalBuscado) {
        arrayProfesionalesModificado.push(nombreProfesionalBuscado);
      }
      else{
        arrayProfesionalesModificado.push(this.profesionales[i]);
      }
            
    }    
    
    escribirJson("ProfesionalesModificado", arrayProfesionalesModificado);

    return nombreProfesionalBuscado;
  }
  
};
/*
console.log("\n****** mostrar todos los profesionales *****");
cartillaProfs.listarTodos(JsonProfesionales);

console.log("\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****");
console.log("La propiedad es profesionales"); 

console.log("\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****");
console.log("Las funciones dentro de un objeto literal se denominan método del objeto.");

console.log("\n****** punto 3 mostrar un profesional *****");
const profesional = JsonProfesionales[0]// un profesional del array a partir de un índice cualquiera
cartillaProfs.mostrarUnProfesional(profesional);

console.log("\n****** punto 4 Listar habilitados ******");
const habilitados = cartillaProfs.filtrarHabilitados(JsonProfesionales);
cartillaProfs.listarTodos(habilitados);

console.log("\n****** punto 5 Buscar por nombre ******");
cartillaProfs.mostrarUnProfesional(cartillaProfs.buscarPorNombre("Huber Wilkins"));
*/

console.log("\n****** punto 6 Incrementar honorarios ******");
console.log(cartillaProfs.incrementarHonorarios("Huber Wilkins", 10));