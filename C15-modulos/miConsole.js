const miConsole = {
  miLog: (objeto) => {
    const objetosMenosPropiedades = {
      nombre: objeto.nombre,
      profesion: objeto.profesion,
    }
    console.log(objetosMenosPropiedades);
  },
  miLogLindo: function (objeto) {
    const mensaje = "El nombre del profesional es " + objeto.nombre +
                    ". Su profesión es " + objeto.profesion +
                    " y su cédula es " + objeto.cedula;
    console.log(mensaje);
  },
  miLogArrays: (array) => {
    for (let i = 0; i < array.length; i++) {
      miConsole.miLogLindo(array[i]);
      
    }
  }
}

module.exports = miConsole;