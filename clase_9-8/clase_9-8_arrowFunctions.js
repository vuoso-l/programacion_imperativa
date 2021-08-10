const pulgadasACentimetros = pulgadas => pulgadas * 2.54;
console.log("----------------------------------");
console.log("-------------pulgadas-------------");
console.log("----------------------------------");
console.log(pulgadasACentimetros(2));

const url = nombreUrl => "http://www." + nombreUrl + ".com";
console.log("----------------------------------");
console.log("----------------url---------------");
console.log("----------------------------------");
console.log(url("lucas"));

const admiracion = palabra => "¡" + palabra + "!";
console.log("----------------------------------");
console.log("------------admiracion------------");
console.log("----------------------------------");
console.log(admiracion("lucas"));

const edadPerro = numEdad => numEdad * 7;
console.log("----------------------------------");
console.log("-------------edadPerro------------");
console.log("----------------------------------");
console.log(edadPerro(5));

const valorHora = sueldoMensual => sueldoMensual / 40;
console.log("----------------------------------");
console.log("-------------valorHora------------");
console.log("----------------------------------");
console.log(valorHora(2000));

const calculadoraImc = (peso, altura) => peso / (altura * altura);
console.log("----------------------------------");
console.log("----------calculadoraImc----------");
console.log("----------------------------------");
console.log(calculadoraImc(67, 1.76));

const pasarMayus = palabra => palabra.toUpperCase();
console.log("----------------------------------");
console.log("------------pasarMayus------------");
console.log("----------------------------------");
console.log(pasarMayus("lucas"));

const tipoDato = cualquierDato => typeof cualquierDato;
console.log("----------------------------------");
console.log("-------------tipoDato-------------");
console.log("----------------------------------");
console.log(tipoDato("lucas"));

const circunsferencia = radio => 2 * Math.PI * radio;
console.log("----------------------------------");
console.log("---------circunsferencia----------");
console.log("----------------------------------");
console.log(circunsferencia(2));