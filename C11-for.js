/*
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];

function convertirMayus(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
       
    }
    return array;
}

console.log(convertirMayus(peliculas));
*/

/*
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function pasajeDeElementos(array1, array2) {
    
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
        //const element = array2[i].toUpperCase(); ------Alternativa------
        array1.push(element.toUpperCase());
        //array1.push(element); ------Alternativa------
        
        
    }
    return array1;
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas));
*/

/*
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function pasajeDeElementos(array1, array2) {    
    
    eliminarInfiltrado(array2);
    
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i].toUpperCase();
        array1.push(element);
        
    }
    convertirMayus(array1);
    return array1;
}

function eliminarInfiltrado(array1) {
    //---esto lo saco xq en el código siguiente puedo realizar la búsqueda de
    //---lo que quiero eliminar y después eliminar eso sin importar si está al final o no
    //let peliculaEliminada = array2.pop();
    //console.log(peliculaEliminada);

    let peliculaEliminada = array1.indexOf("fortnite");
    array1.pop(peliculaEliminada);
    return array1;
}

function convertirMayus(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
       
    }
    return array;
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas));
*/

/*
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

//mejor resolucion

function pasajeDeElementos(array1, array2) {
    let nuevoArray = [];
    for (let i = 0; i < array1.length; i++) {
        
        nuevoArray.push(array1[i].toUpperCase());        
    }
    for (let i = 0; i < array2.length; i++) {
        nuevoArray.push(array2[i].toUpperCase());
        
    }
    return nuevoArray;

}

const peliculasCombinadas = pasajeDeElementos(peliculas, peliculasAnimadas);

console.log(peliculasCombinadas);
*/

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

//mejor resolucion combinada con función mayus

function pasajeDeElementos(array1, array2) {
    let nuevoArray = [];
    for (let i = 0; i < array1.length; i++) {
        
        nuevoArray.push(array1[i]);
        convertirMayus(nuevoArray);    
    }
    for (let i = 0; i < array2.length; i++) {

        nuevoArray.push(array2[i]);
        convertirMayus(nuevoArray);
    }
    return nuevoArray;

}

function convertirMayus(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
       
    }
    return array;
}

const peliculasCombinadas = pasajeDeElementos(peliculas, peliculasAnimadas);

console.log(peliculasCombinadas);

/*
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia,europa){
 
    let comparacionesAsiaEuropa=[];
 
    for(let i=0;i<europa.length;i++){
    comparacionesAsiaEuropa[i]=asia[i]===europa[i];
    }
    return comparacionesAsiaEuropa;
}

console.log(compararCalificaciones(asiaScores, euroScores));
*/

let participanteA =  [5, 8, 4, 9, 5];
let participanteB =  [8, 7, 8, 6, 8];
let participanteC =  [7, 5, 10, 8, 3];

function competencia(participanteA, participanteB, participanteC) {
        
    return mejorPromedio(participanteA, participanteB, participanteC) + mejorPuntaje(participanteA, participanteB, participanteC);
}

function mejorPuntaje(participanteA, participanteB, participanteC) {
    let puntajeA = puntajeMayor(participanteA);
    let puntajeB = puntajeMayor(participanteB);
    let puntajeC = puntajeMayor(participanteC);
    let mejorPuntaje;
    let puntajeParticipante;

    if (puntajeA > puntajeB && puntajeA > puntajeC) {
        mejorPuntaje = puntajeA;
        puntajeParticipante = "particante A";
        return "El mejor puntaje lo obtuvo el " + puntajeParticipante + ", con un puntaje de " + mejorPuntaje + " puntos.";
    } else if (puntajeB > puntajeA && puntajeB > puntajeC) {
        mejorPuntaje = puntajeB;
        puntajeParticipante = "particante B";
        return "El mejor puntaje lo obtuvo el " + puntajeParticipante + ", con un puntaje de " + mejorPuntaje + " puntos.";
            
    } else {
        mejorPuntaje = puntajeC;
        puntajeParticipante = "particante C";
        return "El mejor puntaje lo obtuvo el " + puntajeParticipante + ", con un puntaje de " + mejorPuntaje + " puntos.";
    }
}

function mejorPromedio(participanteA, participanteB, participanteC) {
    let promA = puntajePromedio(participanteA);
    let promB = puntajePromedio(participanteB);
    let promC = puntajePromedio(participanteC);
    let mejorPromedio;
    let promParticipante;

    if (promA > promB && promA > promC) {
        mejorPromedio = promA;
        promParticipante = "particante A";
        return "El mejor promedio lo obtuvo el " + promParticipante + ", con un promedio de " + mejorPromedio + " puntos.";
    } else if (promB > promA && promB > promC) {
        mejorPromedio = promB;
        promParticipante = "particante B";
        return "El mejor promedio lo obtuvo el " + promParticipante + ", con un promedio de " + mejorPromedio + " puntos.";
            
    } else {
        mejorPromedio = promC;
        promParticipante = "particante C";
        return "El mejor promedio lo obtuvo el " + promParticipante + ", con un promedio de " + mejorPromedio + " puntos.";
    }
}

function puntajeMayor(participante) {
    let mayorPuntaje = participante[0];
    let aux = participante.length;
 
    for (let i = 1; i < aux; i++) {
 
        if (participante[i]>participante[i-1]){
            mayorPuntaje = participante [i];
        }
        
    }
    return mayorPuntaje;
}

function puntajePromedio(participante) {
    let sumPuntaje = 0;
    let cantPuntajes = participante.length;
    let promedio;
    
    for (let i = 0; i < cantPuntajes; i++) {
        const sum = participante[i];
        sumPuntaje += sum;
        
    }

    promedio = sumPuntaje / cantPuntajes;

    return promedio;
}

console.log(competencia(participanteA, participanteB, participanteC));

