/*
console.log("---------ej A---------");

let peliculas = ["leon", "rocky", "pedro", "titanic"];
console.log(peliculas[2]);

console.log("--------ej B---------");

peliculas[0] = "leones";
peliculas[1] = "rockyes";
peliculas[2] = "pedros";
peliculas[3] = "titanics";
console.log(peliculas);

console.log("--------ej C---------");

peliculas.push("lala");
console.log(peliculas);

console.log("--------ej D---------");

let borrado = peliculas.shift();
console.log(peliculas);

console.log("--------ej E---------");

let array1 = ["boca", "river", "racing"];
console.log(peliculas ===array1);

let str = "un string cualquiera";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])


let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas[1]);

mayus(peliculas);

function mayus(array1) {
                    
    console.log(array1[0].toUpperCase());
    console.log(array1[1].toUpperCase());
    console.log(array1[2].toUpperCase());
    console.log(array1[3].toUpperCase());
    console.log(array1[4].toUpperCase());
}

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let guardarEliminado = animadas.pop();
mayus2(peliculas, animadas);

function mayus2(array1, array2) {
    let array3 = array1.concat(array2);
    console.log(array3[0].toUpperCase());
    console.log(array3[1].toUpperCase());
    console.log(array3[2].toUpperCase());
    console.log(array3[3].toUpperCase());
    console.log(array3[4].toUpperCase());
    console.log(array3[5].toUpperCase());
    console.log(array3[6].toUpperCase());
    console.log(array3[7].toUpperCase());
    console.log(array3[8].toUpperCase());
}
console.log("----------------------");
console.log("----------------------");
console.log("----------------------");

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

eval();
function eval() {
    if (condicionEval(asiaScores, euroScores)) {
        iguales();
    }else{
        diferentes();
    }
}

function condicionEval(array1, array2) {
    return array1 === array2;
}

function iguales() {
    console.log("Son iguales");
}

function diferentes() {
    console.log("Son diferentes");
}

let array1 = ["A", "B", "C", "D"];


inversor();
function inversor() {
    //console.log(imprimirInverso(array1.reverse()));
    console.log(invert());
}

function invert() {
    return imprimirInverso(array1.reverse());
}

function imprimirInverso(array1) {
    return array1.reverse();
}


let sumArray = [-5,100, 19];
function sumaArray([a, b, c]) {
    return a+b+c;
}

console.log(sumaArray(sumArray));
*/

let array1 = ["h","o","l","a"];

function join([a, b, c, d]) {
    return a + b + c + d;
}

console.log(join(array1));