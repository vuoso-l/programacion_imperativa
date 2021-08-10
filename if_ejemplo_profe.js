const edadMin = 12;
const alturaMin = 1.30;

//let puedeSubir = edad >= edadMin && altura >= alturaMin;
main();

function main() {
    if (puedeSubir(12, 1.5)) {
      levantarBarreraEntrada();
    } else {
      levantarBarreraSalida();
    }
}
    


function puedeSubir(edad, altura) {
  return edad >= edadMin && altura >= alturaMin;
}
function levantarBarreraSalida() {
  console.log("levantando barrera salida...");
}
function levantarBarreraEntrada() {
  console.log("levantando barrera entrada...");
}
