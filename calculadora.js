function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

console.log("----sumar-----");
console.log(sumar(2, 4));

console.log("----restar-----");
console.log(restar(2, 4));

console.log("----multiplicar-----");
console.log(multiplicar(2, 4));

console.log("----dividir-----");
console.log(dividir(2, 4));

console.log("----dividir-----");
console.log(dividir(2, 0));

function cuadradoDeUnNumero(num) {
    return multiplicar(num, num);
}

function promedioDeTresNumeros(num1, num2, num3) {    
    return dividir((sumar(sumar(num1, num2), num3)), 3);
}

function calcularPorcentaje(num1, num2) {
    return multiplicar(dividir(num1, 100), num2);
}

function generadorDePorcentaje(num1, num2) {
    return dividir(multiplicar(num1, 100), num2);
}