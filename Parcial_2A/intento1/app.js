const jsonHelper = require(__dirname + "/jsonHelper");
let JsonTrabajadores = jsonHelper.leerJson("trabajadores");

//objeto literal con props y métodos
const catalogTrabajadores = {
  trabajadores: JsonTrabajadores,
  //NO modificar esto
  mostrarUnTrabajador: function (trabajador) {
    console.table({
      [trabajador.id]: {
        nombre: trabajador.nombre,
        oficio: trabajador.oficio,
        honorarios: trabajador.precioConsulta,
        consultas: trabajador.consultasRealizadas,
        matriculado: trabajador.matriculado,
      },
    });
  },
  listarTodos: function (trabajadoresAMostrar) {
    let datos = [];
    for (let i = 0; i < trabajadoresAMostrar.length; i++) {
      datos.push(this.traerUnTrabajador(trabajadoresAMostrar[i]));
    }
    console.table(datos);
  },
  traerUnTrabajador: function (trabajador) {
    return {
      nombre: trabajador.nombre,
      honorarios: "$" + trabajador.precioConsulta, //modifiqué a precio consulta, arrojaba undefined
      oficio: trabajador.oficio,
      matriculado: trabajador.matriculado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
  filtrarPorRating: (ratingMin) => {
    let arrayPorRating = [];
    for (let i = 0; i < catalogTrabajadores.trabajadores.length; i++) {

      if (catalogTrabajadores.trabajadores[i].rating >= ratingMin) {
        arrayPorRating.push(catalogTrabajadores.trabajadores[i]);
      }

    }
    return arrayPorRating;

  },
  buscarPorId: (idTrabajador) => {
    let mensaje = "No se encontró el trabajador solicitado. Revise que la identificación sea la correcta"
    for (let i = 0; i < catalogTrabajadores.trabajadores.length; i++) {
      if (catalogTrabajadores.trabajadores[i].id === idTrabajador) {
        return catalogTrabajadores.trabajadores[i];
      }

    }
    return mensaje;
  },
  incrementarConsultasRealizadas: (idTrabajador, cantidadConsultas) => {
    let trabajadorBuscado = catalogTrabajadores.buscarPorId(idTrabajador);
    trabajadorBuscado.consultasRealizadas += cantidadConsultas;
    let arrayTrabajadoresModificado = [];

    for (let i = 0; i < catalogTrabajadores.trabajadores.length; i++) {

      /*if (catalogTrabajadores.trabajadores[i].id === trabajadorBuscado.id) {
        //arrayTrabajadoresModificado.push(trabajadorBuscado);
        arrayTrabajadoresModificado.push(catalogTrabajadores.trabajadores[i]);
      }*/
      arrayTrabajadoresModificado.push(catalogTrabajadores.trabajadores[i]);
      jsonHelper.escribirJson("trabajadores modificado", arrayTrabajadoresModificado);
    }

    return trabajadorBuscado;
  }

};

console.log("\n****** mostrar todos los trabajadores *****");
catalogTrabajadores.listarTodos(JsonTrabajadores);

console.log(
  "\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****"
);
console.log("responda aquí: trabajadores");

console.log(
  "\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****"
);
console.log("responda aquí: método");

console.log("\n****** punto 3 mostrar un trabajador *****");
const trabajador = catalogTrabajadores.trabajadores[0]; // un trabajador del array a partir de un índice cualquiera (a modo de ejemplo para probar el metodo)
catalogTrabajadores.mostrarUnTrabajador(trabajador);

console.log("\n****** punto 4  ******");
let trabajadoresPorRating = catalogTrabajadores.filtrarPorRating(3);
catalogTrabajadores.listarTodos(trabajadoresPorRating);

console.log("\n****** punto 5 ******");
//let trabajadorPorId = console.log(catalogTrabajadores.buscarPorId(1));
catalogTrabajadores.mostrarUnTrabajador(catalogTrabajadores.buscarPorId(1));

console.log("\n****** punto 6 ******");
console.log(catalogTrabajadores.incrementarConsultasRealizadas(1, 5));