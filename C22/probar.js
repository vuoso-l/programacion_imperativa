const alumnos = [{
    nombre: "ivan",
    nota: 5
  }, {
    nombre: "jose",
    nota: 3
  }, {
    nombre: "zoe",
    nota: 9
  }, {
    nombre: "andres",
    nota: 10
  }, {
    nombre: "Guillermo",
    nota: 8
  },
  {
    nombre: "Ana",
    nota: 8
  }, {
    nombre: "jose",
    nota: 8
  }
]

const escuela = {
    nombres: alumnos,
    minusc: function () {
        return this.nombres.sort((nombre1, nombre2) => (nombre1.nombre - nombre2.nombre));
    }
}

//const minusc = () => alumnos.sort((nombre1, nombre2) => (nombre1.nota - nombre2.nota));
console.log(escuela.minusc());