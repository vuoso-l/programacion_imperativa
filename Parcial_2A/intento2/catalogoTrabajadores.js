const jsonHelper = require(__dirname + "/jsonHelper.js");
const trabajadoresJson = jsonHelper.lecturaJson("trabajadores");

const catalogoTrabajadores = {
    trabajadores: trabajadoresJson,
    mostrarUnTrabajador: function (trabajadorIngresado) {
        
            console.table( [{
                identificacion: trabajadorIngresado.id,          
                nombre: trabajadorIngresado.nombre,
                oficio: trabajadorIngresado.oficio,
                consultas: trabajadorIngresado.consultasRealizadas,
                rating: trabajadorIngresado.rating,
                matriculado: trabajadorIngresado.matriculado,
            }]);
        
    },
    mostrarTodos: function (arrayTrabajador) {
        arrayTrabajador.forEach(trabajador => {
            console.log("El nombre del trabajador es " + trabajador.nombre + ", su oficio es " + trabajador.oficio + ", por consulta cobra $" + trabajador.precioConsulta + " y su rating es " + trabajador.rating + ". ¿Se encuentra matriculado? " + trabajador.matriculado + ".");
        });
    },
    filtrarPorRating: function (ratingMinimo) {
        return this.trabajadores.filter(trabajador => trabajador.rating >= ratingMinimo);
    },
    buscarPorId: function (idTrabajador) {
        return this.trabajadores.find(trabajador => trabajador.id === idTrabajador);
    },
    incrementarConsultasRealizadas: function (idTrabajador, cantidadConsultas) {
        const trabajadorBuscado = this.buscarPorId(idTrabajador).reduce((total, trabajador) => {
            trabajador.consultasRealizadas += total + cantidadConsultas;
            return trabajador;
        }, 0);
        this.trabajadores.forEach(trabajador => trabajador + trabajadorBuscado);
        jsonHelper.escrituraJson("trabajadores", this.trabajadores);
        return trabajadorBuscado;
    }
}

module.exports = catalogoTrabajadores;