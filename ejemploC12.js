let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function peliculasAMayus(pelis, pelis2) {
    let nuevoArray = []

    for (let i = 0; i < pelis.length; i++) {
        const peli = pelis[i];
        nuevoArray.push(peli.toUpperCase())
    }

    for (let i = 0; i < pelis2.length; i++) {

        nuevoArray.push(pelis2[i].toUpperCase());
    }
    return nuevoArray
}
const peliculasTotales = peliculasAMayus(peliculas, peliculasAnimadas)
console.log(peliculasTotales)
console.log(peliculas)
