let num1 = 10;
let num2 = "2";

dividir();

function dividir() {
    if (verificarDatos(num1, num2)){
        let resultado = num1 / num2;
        console.log("Resultado de la división = " + resultado);
    }else{
        console.log("No es posible realizar la división");
    }
}

function verificarDatos(num1, num2) {
    return (typeof num1 === "number" && typeof num2 === "number") && num2 !== 0;
}
