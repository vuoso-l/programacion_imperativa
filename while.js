/*
let numeros = [1, 2, 3, 4, 5, 6];

function encontreUn5(numeros){
    let i = 0;
    do{
        console.log(numeros[i]);            
        i++;

        if (numeros[i] === 5) {
            
            console.log("Se encontrĂ³ un 5!");

        }
    }
    while(numeros[i] !== 5)
}

encontreUn5(numeros);
*/

function tablaDeMultiplicar(numero) {
    let i = 1;
   while(i <= 10){
       console.log(numero + " * " + i + " = " + numero * i);
       i++
   }
}

tablaDeMultiplicar(5);