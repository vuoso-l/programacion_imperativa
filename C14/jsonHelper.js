const fs = require("fs");

const jsonHelper = {
  leerJson: function (nombreArchivo) {
    const json = fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8")
    
    return JSON.parse(json);
  },
  escribirJson: function (nombreArchivo, datos) {
    const jsonListoParaGuardar = JSON.stringify(datos);
    const direccion = __dirname + "/" + nombreArchivo + ".json";
    const guardarDatosEnArchivo = fs.writeFileSync(
      direccion,
      jsonListoParaGuardar
      );
      
    return guardarDatosEnArchivo;
  },
};

module.exports = jsonHelper;
