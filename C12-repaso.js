const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador(a, b) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    let iguales = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            puntosPrimerParticipante++;
        } else if(b[i] > a[i]){
            puntosSegundoParticipante++;
        }else{
            iguales++;
        }                
    }
    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        return "Alicia";
    } else if(puntosSegundoParticipante > puntosPrimerParticipante){
        return "Bob";
    } else{
        return "no hay ganador, es un empate";
    }
}

console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");

console.log("----------------------------------");
console.log("------------ejercicio 2-----------");
console.log("----------------------------------");

digitalHouse(50, 10);

function digitalHouse(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if(i % num1 === 0 && i % num2 === 0) {
            console.log("----------------------Digital House");
        } else if (i % num1 === 0) {
            console.log("----------------------Digital");
        }else if(i % num2 === 0){
            console.log("----------------------House");
        }else{
            console.log("Número " + i);
        }
    }
}

console.log("----------------------------------");
console.log("------------ejercicio 3-----------");
console.log("----------------------------------");

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3];
let array3 = [10, 10, 10, 10, 10, 10];

function sumArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        
        suma += array[i];
        
    }
    return suma;
}

console.log(sumArray(array3));

console.log("----------------------------------");
console.log("------------ejercicio 4-----------");
console.log("----------------------------------");

let carac1 = ["h", "o", "l", "a"];
let carac2 = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o", "!"];

function join(array) {
    let palabra = "";
    for (let i = 0; i < array.length; i++) {
        palabra += array[i];
        
    }
    return palabra;
}

console.log(join(carac2));