const { escribirJson } = require("./jsonHelper");

const jsonHelper = require(__dirname + "/jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
const deptos = jsonHelper.leerJson("departamentos");
//console.log(deptos);
console.log(deptos[0].id + " " + deptos[0].precioAlquiler);

// Escribí tu codigo a partir de acá.
const inmobiliaria = {
    departamentos: deptos,
    listarDepartamentos: function (deptos) {
        
        for (let i = 0; i < deptos.length; i++) {
            const habilitado = deptos[i].disponible ? "Habilitado" : "Alquilado";
            console.log(
                "Id: " + deptos[i].id +
                ", precio: " + deptos[i].precioAlquiler +
                " y disponibilidad: " + habilitado
            );                        
        }
         
    },
    departamentosDisponibles: function (deptos) {
        let deptosDisponibles = [];
        for (let i = 0; i < deptos.length; i++) {
            const disponibles = deptos[i].disponible;
            
            if (disponibles === true) {
                deptosDisponibles.push(deptos[i]);
            }
            
        }
        return deptosDisponibles;
    },
    buscarPorId: function (idDepto) {
        for (let i = 0; i < this.departamentos.length; i++) {
            const deptoPorId = this.departamentos[i].id;
            if (deptoPorId === idDepto) {
                return this.departamentos[i];
            }
        }
        return "No hubo coincidencias";
    },
    buscarPorPrecio: function (precioAlquiler) {
        let arrayAux = this.departamentosDisponibles(this.departamentos);
        let departamentosPorPrecio = [];
        //let bandera = false;
        let mensaje = "No hubo coincidencias";
        for (let i = 0; i < arrayAux.length; i++) {
            
            if (arrayAux[i].precioAlquiler <= precioAlquiler) {
                
                departamentosPorPrecio.push(arrayAux[i]);
                //bandera = true;
            }
        }
        return departamentosPorPrecio.length >= 1 ? departamentosPorPrecio : mensaje;
        //return bandera === true ? departamentosPorPrecio : mensaje;

    },
    precioConImpuesto: function (porcentajeAumento ) {
        let departamentosConAumento = [];
        
        for (let i = 0; i < this.departamentos.length; i++) {
            let aumento = (this.departamentos[i].precioAlquiler * porcentajeAumento) / 100;
            this.departamentos[i].precioAlquiler += aumento;
            departamentosConAumento.push(this.departamentos[i]);
            
        }
        return departamentosConAumento;
    },
    alquilarDepartamento: function (idDepto) {
        
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].id === idDepto && this.departamentos[i].disponible === true) {
                
                this.departamentos[i].disponible = false;
                //this.departamentos.push(this.departamentos[i]);
                escribirJson("departamentos", this.departamentos);
                return "Se modificó la lista de departamentos";
            }else if(this.departamentos[i].id === idDepto && this.departamentos[i].disponible === false){
                return "Está alquilado ese departamento";
            }
            
        }
        return "No existe el departamento en la base de datos";
    }
    
}
/*
console.log("------------------------------------");
console.log("-------------ejercicio 2.B----------");
console.log("------------------------------------");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.log("------------------------------------");
console.log("-------------ejercicio 2.C----------");
console.log("------------------------------------");
const departamentosDisponibles = inmobiliaria.departamentosDisponibles(inmobiliaria.departamentos);
console.log(departamentosDisponibles);
console.log("------------------------------------");
console.log("-------------ejercicio 2.D----------");
console.log("------------------------------------");
console.log(inmobiliaria.buscarPorId(4));
*/
console.log("------------------------------------");
console.log("-------------ejercicio 2.E----------");
console.log("------------------------------------");
console.log(inmobiliaria.buscarPorPrecio(2000.5));
/*
console.log("------------------------------------");
console.log("-------------ejercicio 2.F----------");
console.log("------------------------------------");
console.log(inmobiliaria.precioConImpuesto(10));
console.log("------------------------------------");
console.log("-------------ejercicio 2.E----------");
console.log("------------------------------------");
console.log(inmobiliaria.alquilarDepartamento(25));
*/