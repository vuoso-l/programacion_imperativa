const jsonHelper = require(__dirname + "/jsonHelper.js");
const jsonAutos = jsonHelper.lecturaJson("autos");

const carrera = {
    autos: jsonAutos,
    autosPorTanda: 6,
    autosHabilitados: function (arrayAutos = this.autos) {
        return arrayAutos.filter(auto => auto.sancionado === false);
    },
    listarAutos: function (arrayAutos = this.autos) {
        arrayAutos.forEach(auto => {
            
            console.log("Piloto: " + auto.piloto +
                ", patente: " + auto.patente +
                ", peso en kg.: " + auto.peso +
                ", estado: " + (auto.sancionado ? "Inhabilitado" : "Habilitado") + ".");
        });
    },
    buscarPorPatente: function (patente, arrayAutos = this.autos) {
        return arrayAutos.find(auto => auto.patente === patente);
    },
    buscarPorCilindrada: function (cilindradaMaxABuscar) {
        return this.autosHabilitados().filter(auto => auto.cilindrada <= cilindradaMaxABuscar);
    },
    ordenarPorVelocidad: function (arrayAutos = this.autos) {
        return arrayAutos.sort((auto1, auto2) => auto1.velocidad - auto2.velocidad);
    },
    generarTanda: function (cilindradaMaxABuscar, pesoAuto) {
        //vesión copada
        //return this.buscarPorCilindrada(cilindrada).filter(elemento=>{return elemento.peso<=peso}).slice(0,this.autosPorTanda);
        const cantidadAutosPorTanda = this.buscarPorCilindrada(cilindradaMaxABuscar).filter(auto => auto.peso <= pesoAuto);
        return cantidadAutosPorTanda.length <= this.autosPorTanda ? cantidadAutosPorTanda : "Se superó la cantidad de autos permitida.";
    },
    listarPodio: function (cilindradaMaxABuscar, pesoAuto) {
        const autos = this.generarTanda(cilindradaMaxABuscar, pesoAuto);
        const autosPorPuntaje = autos.sort((auto1, auto2) => auto2.puntaje - auto1.puntaje);
        console.log("El ganador es: " + autosPorPuntaje[0].piloto + ", con un puntaje de: " + autosPorPuntaje[0].puntaje);
        console.log("El segundo puesto es: " + autosPorPuntaje[1].piloto + ", con un puntaje de: " + autosPorPuntaje[1].puntaje);
        console.log("El tercer puesto es: " + autosPorPuntaje[2].piloto + ", con un puntaje de: " + autosPorPuntaje[2].puntaje);        

    }
}

module.exports = carrera;