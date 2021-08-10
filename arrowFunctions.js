const sumar = (num1, num2) => num1 + num2;

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
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

const cuadradoDeUnNumero = num => multiplicar(num, num);

const promedioDeTresNumeros = (num1, num2, num3) => dividir((sumar(sumar(num1, num2), num3)), 3);

const calcularPorcentaje = (num1, num2) => {
    return multiplicar(dividir(num1, 100), num2);
}

const generadorDePorcentaje = (num1, num2) => {
    return dividir(multiplicar(num1, 100), num2);
}
console.log("---------------------------");
console.log("----cuadradoDeUnNumero-----");
console.log("---------------------------");
console.log(cuadradoDeUnNumero(2));
console.log("---------------------------");
console.log("----promedioDeTresNumeros-----");
console.log("---------------------------");
console.log(promedioDeTresNumeros(1, 2, 3));
console.log("---------------------------");
console.log("----calcularPorcentaje-----");
console.log("---------------------------");
console.log(calcularPorcentaje(2, 4));
console.log("---------------------------");
console.log("----generadorDePorcentaje-----");
console.log("---------------------------");
console.log(generadorDePorcentaje(2, 4));

/* callbacks */
function calculadora(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(calculadora(2, 3, sumar));
console.log(calculadora(2, 3, restar));
console.log(calculadora(2, 3, multiplicar));
console.log(calculadora(6, 3, (n1, n2) => n1 / n2));