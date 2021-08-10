let cuenta0 = {
    numeroCuenta: 1234,
    tipo: "CA",
    saldo: 1234,
    titular: "Lucas Vuoso",
};
console.log("-------Prueba estructura-------");
console.log(cuenta0);

function Cuenta(numeroCuenta, tipo, saldo, titular) {
    this.numeroCuenta = numeroCuenta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let cuenta1 = new Cuenta(5486273622, "Cuenta Corriente", 27771, "Abigael Natte");
let cuenta2 = new Cuenta(1183971869, "Caja de Ahorro", 8675, "Ramon Connell");
let cuenta3 = new Cuenta(9582019689, "Caja de Ahorro", 27363, "Jarret Lafuente");
let cuenta4 = new Cuenta(1761924656, "Caja de Ahorro", 32415, "Ansel Ardley");
let cuenta5 = new Cuenta(7401971607, "Caja de Ahorro", 18789, "Jacki Shurmer");
let cuenta6 = new Cuenta(630841470, "Cuenta Corriente", 28776, "Jobi Mawtus");
let cuenta7 = new Cuenta(4223508636, "Cuenta Corriente", 2177, "Thomasin Latour");
let cuenta8 = new Cuenta(185979521, "Caja de Ahorro", 25994, "Lonnie Verheijden");
let cuenta9 = new Cuenta(3151956165, "Cuenta Corriente", 7601, "Alonso Wannan");
let cuenta10 = new Cuenta(2138105881, "Caja de Ahorro", 33196, "Bendite Huggett");
/*
console.log("----------------------------");
console.log("-------Log de cuentas-------");
console.log("----------------------------");

console.log(cuenta1);
console.log(cuenta2);
console.log(cuenta3);
console.log(cuenta4);
console.log(cuenta5);
console.log(cuenta6);
console.log(cuenta7);
console.log(cuenta8);
console.log(cuenta9);
console.log(cuenta10);
*/
console.log("----------------------------");
console.log("-------Lista de cuentas-------");
console.log("----------------------------");

let cuentaPorDiez = [cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6, cuenta7, cuenta8, cuenta9, cuenta10];
//console.log(cuentaPorDiez);

console.log("----------------------------");
console.log("-------Log consultarCliente-------");
console.log("----------------------------");

let banco = {
    clientes: cuentaPorDiez,
    consultarCliente: function (nombre) {
        let clienteEncontrado;
        let clienteNoEncontrado = "El cliente no existe";
        for (let i = 0; i < this.clientes.length; i++) {
            
            if (this.clientes[i].titular === nombre) {
                clienteEncontrado = this.clientes[i];
            }
            
        }
        let resultado = clienteEncontrado ? clienteEncontrado : clienteNoEncontrado;
        return resultado;
    },
    crearDeposito: function (nombre, deposito) {
        let clienteEncontrado = this.consultarCliente(nombre); //siempre es un true porque entra a la función y arroja algo
        console.log(clienteEncontrado);
        let saldoActutalizado = clienteEncontrado.saldo + deposito;
        let comprobanteAceptado = "Depósito realizado, su nuevo saldo es: " + saldoActutalizado;
        let comprobanteRechazado = "No se pudo realizar el depósito porque no se encontraron los datos solicitados";
        /*if (clienteEncontrado) {
            comprobanteAceptado;
            //saldoActutalizado = clienteEncontrado.saldo + deposito;
            //comprobante = "Depósito realizado, su nuevo saldo es: " + saldoActutalizado;
        }
        else if (clienteNoEncontrado) {
            comprobante = "No se pudo realizar el depósito porque no se encontraron los datos solicitados";
        }*/
        return typeof(clienteEncontrado) !== "string" ? comprobanteAceptado : comprobanteRechazado;
        
    }
   
};
console.log(banco.consultarCliente("Thomasin Latour"));
console.log(banco.crearDeposito("Thomasin Latour", 1000));


