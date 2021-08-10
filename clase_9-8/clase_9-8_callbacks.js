const nombres = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam'];
const buscarNombre = (nombreBusqueda, callback) => {
    /*for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i];
        if (nombre === nombreBusqueda) {
            return "El nombre " + nombreBusqueda + " fue encontrado."
        } else {
            return callback(nombreBusqueda);
        }
    }*/
    
    nombres.forEach(nombre => {
        if (nombre === nombreBusqueda) {
            return "El nombre " + nombreBusqueda + " fue encontrado."
        } else {
            return callback(nombreBusqueda);
        }
    });
}

const mostrarResultado = valorIngresado => valorIngresado === "" || valorIngresado === " " ? "Nombre no encontrado." : "El nombre fue encontrado.";

console.log(buscarNombre("Martin", mostrarResultado));
//console.log(mostrarResultado("Martin"));