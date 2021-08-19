const fs = require("fs");

const jsonHelper = {
    lecturaJson: function (nombreArchivo) {
        return JSON.parse(fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8"));
    },
    escrituraJson: function (nombreArchivo, arrayAUsar) {
        return fs.writeFileSync(__dirname + "/" + nombreArchivo + ".json", JSON.stringify(arrayAUsar));
    }
}

module.exports = jsonHelper;