//let texto = "hola";
/*
loro("hola");

function loro(texto){
    for(let i = 0; i < 5; i++ ){
        console.log(texto);
    }
}
*/
console.log(noParesDeContarImparesHasta(4));

function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 1){
            contador++            
        }
    }
    return contador;
}







/*
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const americaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5, 6];

function mostrarArrays(a, b) {
    if (a.length === b.length) {
        
        for (let i = 0; i < a.length; i++) {
            const scores = a[i];
            const scores2 = b[i];
            const nameVar = Object.keys({a})[0]; //es para usar el nombre del parámetro como impresión en el log
            console.log(nameVar + ": " + scores, "Array2: " + scores2, );

        }
    }else{
        for (let i = 0; i < a.length; i++) {
            const scor = a[i];
            console.log("Array1: " + scor);
        }
        for (let i = 0; i < b.length; i++) {
            const scor2 = b[i];
            console.log("Array2: " + scor2);
        }
    }
}

console.log("-------opción 1-------");
console.log("----------------------");
mostrarArrays(asiaScores, euroScores);

console.log("----------------------");
console.log("-------opción 2-------");
console.log("----------------------");
mostrarArrays(asiaScores, americaScores);
*/