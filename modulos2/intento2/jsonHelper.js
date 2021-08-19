const fs = require("fs");

const helper = {
    leerJson: function (nombreArchivo) {
        return JSON.parse(fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8"));
    },
    escribirJson: function (nombreArchivo, arrayDatos) {
        return fs.writeFileSync(__dirname + "/" + nombreArchivo + ".json", JSON.stringify(arrayDatos));
    }
}

module.exports = helper;