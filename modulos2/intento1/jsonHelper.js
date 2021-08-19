const fs = require("fs");

const jsonHelper = {
    leerJson: function (nombreArchivo) {
        const datos = fs.readFileSync(__dirname + "/" + nombreArchivo, "utf-8");    
        const arrayHelper = JSON.parse(datos);
        return arrayHelper;
        
    },
    escribirJson: function (nombreArchivo, datos) {
        const arrayParaJson = JSON.stringify(datos);
        const escritura = fs.writeFileSync(__dirname + "/" + nombreArchivo + ".Json", arrayParaJson)
        return escritura;
    }
}

module.exports = jsonHelper;