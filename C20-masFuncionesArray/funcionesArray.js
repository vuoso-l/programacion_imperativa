const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* explicación de lo que iría en los paréntesis del reduce */
//const reducer = (acum, current) => acum + current;

let dividirArray = nums => {
    const suma = nums.reduce((acum, current) => acum + current);
    return nums.map((num) => num / suma);
}

const arrayPalabras = ["clase", "mes", "ezequiel"];
let filtrado = (arregloPalabras, num) => arregloPalabras.filter((palabra) => palabra.length > num);


console.log("-----------------------");
console.log("-----dividirArray------");
console.log("-----------------------");
console.log(dividirArray(numeros));

console.log("-----------------------");
console.log("-------filtrado--------");
console.log("-----------------------");
console.log(filtrado(arrayPalabras, 5));

