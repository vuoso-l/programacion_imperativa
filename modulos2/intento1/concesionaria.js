const { escribirJson } = require("./jsonHelper");

const jsonHelper = require(__dirname + "/jsonHelper");
const arrayAutos = jsonHelper.leerJson("AUTOS.json");

const concesionaria = {
    autos: arrayAutos,
    filtrarVendidos: function () {
        const autosVendidos = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.vendido) {
                autosVendidos.push(auto);
            }
        }
        return "Los autos vendidos son: " + autosVendidos;
    },
    agregarAuto: function (marca, modelo, anio, precio, patente) {
        const autoNuevo = {
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: false,
        };
        this.autos.push(autoNuevo);
        const autosModificados = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            autosModificados.push(auto);
        }
        escribirJson("AUTOS", autosModificados);
        return autosModificados ? "Auto nuevo agregado correctamente" : "No fue posible agregar el auto";
        
    },
    venderAuto: function (patente) {
        let autoModificadoAVendido = [];

        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].patente === patente) {
                this.autos[i].vendido = true;
                autoModificadoAVendido.push(this.autos[i]);
                escribirJson("AUTOS", this.autos);
            }            
            
        }
        
        return "El vehículo: " + autoModificadoAVendido.marca + " " + autoModificadoAVendido.modelo + " ha sido vendido.";
    },
    totalDeVentas: function () {
        let sumaTotal = 0;
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.vendido) {
                sumaTotal += auto.precio;
            }
        }
        return "EL valor total de los autos vendidos es de $" + sumaTotal;
    },
    eliminarAuto: function (patente) {
        const autoEliminado = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.patente === patente) {
                autoEliminado.push(auto);
            }
        }
        
        const indiceAuto = this.autos.findIndex(auto => auto.patente === patente);
        this.autos.splice(indiceAuto, 1);
        escribirJson("AUTOS", this.autos);
        return "Se eliminó correctamente el auto: " + autoEliminado;
    }
}

module.exports = concesionaria;