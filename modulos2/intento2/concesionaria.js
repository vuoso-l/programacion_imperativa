const helper = require(__dirname + "/jsonHelper.js");
const autosJson = helper.leerJson("AUTOS");

const concesionaria = {
    autos: autosJson,
    mostrarUnAuto: function (autoIngresado) {
        
            console.table({
                [autoIngresado.patente]:{
                marca: autoIngresado.marca,
                modelo: autoIngresado.modelo,
                precio: autoIngresado.precio,
                vendido: autoIngresado.vendido,
            }});        
    },
    mostrarTodos: function (arrayUsar) {
        return arrayUsar.forEach(auto => {
            console.table({
                [auto.patente]: {
                    marca: auto.marca,
                    modelo: auto.modelo,
                    precio: auto.precio,
                    vendido: auto.vendido,
                }
            })
        });
    },
    agregarAuto: function (marcaAuto, modeloAuto, anioAuto, precioAuto, patenteAuto) {
        const autoAgregado = {
                marca: marcaAuto,
                modelo: modeloAuto,
                anio: anioAuto,
                precio: precioAuto,
                patente: patenteAuto,
                vendido: false,
            };
        this.autos.push(autoAgregado);
        helper.escribirJson("AUTOS", this.autos);
        return autoAgregado;
        //return this.autos.splice(0, 0, autoAgregado)
        //return autoAgregado;
    },
    venderAuto: function (patenteAuto) {
        return this.autos.find(auto => {
            if (auto.patente === patenteAuto) {
                auto.vendido = true;
                helper.escribirJson("AUTOS", this.autos);
            };
        });
    },
}

module.exports = concesionaria;