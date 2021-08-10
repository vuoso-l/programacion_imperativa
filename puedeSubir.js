console.log("-------------------");
console.log("-- Primera parte --");
console.log("-------------------");

let altura = 1.5;
let acompaniada = true;
let penalizada = false;

puedeSubir();

function puedeSubir() {
    if (subirPoraltura(altura)) {
        sube();
    } else if (subirAcompaniada(altura, acompaniada)) {
        subeAcomp();
    }else{
        noSube();
    }
    
}

function subirPoraltura(altura) {
    return altura >= 1.4 && altura < 2;
}

function subirAcompaniada(altura, acompaniada) {
    return (altura < 1.4 && altura > 1.2) && acompaniada;
}

function sube() {
    console.log("Puede subir");
}

function subeAcomp() {
    console.log("Puede subir pero acompañada");
}

function noSube() {
    console.log("No puede subir");
}

console.log("-------------------");
console.log("-- Segunda parte --");
console.log("-------------------");

puedeSubirONo();

function puedeSubirONo() {
    if (noSubePorPenalizacion(penalizada)){
        console.log("penalizada"); 
    } else if (subirAcompaniada(altura, acompaniada)) {
        subeAcomp();
    } else if(subirPoraltura(altura)) {
        sube();
    }
    else{
        noSube();
    }
    
}

function subirPoraltura(altura) {
    return altura >= 1.4 && altura < 2;
}

function subirAcompaniada(altura, acompaniada) {
    return (altura < 1.4 && altura > 1.2) && acompaniada;
}

function noSubePorPenalizacion(penalizada) {
    return penalizada === true;
}

function sube() {
    console.log("Puede subir");
}

function subeAcomp() {
    console.log("Puede subir pero acompañada");
}

function noSube() {
    console.log("No puede subir");
}

