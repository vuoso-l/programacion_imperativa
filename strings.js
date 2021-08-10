/*
dominio();
function dominio (){
    let str = "digitalhouse.com.ar";
    let comp = "http://www.";
    console.log(comp + str);    
}

dominio();
function dominio (){
    let str = "digitalhouse.com.ar";
    console.log(str.replace("digitalhouse.com.ar", "http://www.digitalhouse.com.ar"));    
}

function reemplazoFastFast(){
    let texto = "Este texto es mala onda";
    return texto.replace("mala", "buena");
}
console.log(reemplazoFastFast());


let texto = "estudiando mucho javascript";
let palabra = 12;

function menciona(texto, palabra){
    if(texto.indexOf(palabra) >= 0){
        return "true";
    }else{
        return "false";
    }
}

console.log(menciona(texto, palabra));
*/

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11);
console.log(licenciada);