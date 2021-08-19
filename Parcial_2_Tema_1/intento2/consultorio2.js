const { table } = require("console");

const helper = require(__dirname + "/helper");
const profesionalesJson = helper.lecturaJson("profesionales");

const consultorio = {
    profesionales: profesionalesJson,
    mostrarUnProfesional: function (prof) {
        /*
        return this.profesionales.filter(profesional => {
            if (profesional === prof) {
                return profesional;
            }
        });*/
        console.table({
            [prof.identificador]: {
                nombre: prof.nombre,
                honorarios: prof.honorarioConsulta,
                habilitado: prof.estaHabilitado,
                especialidad: prof.especialidad,
            }
        }
        )
    },
    listarTodos: function () {
        this.profesionales.forEach(profesional => {
            console.log("El nombre del profesional es " + profesional.nombre + ", su especialidad es " + profesional.especialidad + " y por consulta cobra $" + profesional.honorarioConsulta + ". ¿Se encuentra habilitado? " + profesional.estaHabilitado + ".");
        });
        /*
        return this.profesionales.map(profesional => {
            return {
                nombre: profesional.nombre,
                honorarios: profesional.honorarioConsulta,
                habilitado: profesional.estaHabilitado,
                especialidad: profesional.especialidad,
            }
        });*/
    },
    filtrarHabilitados: function (condicionHabilitacion) {
        return this.profesionales.filter((profesional) => profesional.estaHabilitado === condicionHabilitacion);

    },
    buscarPorNombre: function (nombreProfesional) {
        return this.profesionales.filter((profesional) => profesional.nombre === nombreProfesional);
    },
    incrementarHonorarios: function (nombreProfesional, porcentajeIncremento) {
        //const filtroPorNombre = this.buscarPorNombre(nombreProfesional);

        const profesionalHonorarioIncrementado = this.buscarPorNombre(nombreProfesional).reduce((total, profesional) => {
            profesional.honorarioConsulta += (total + ((profesional.honorarioConsulta * porcentajeIncremento) / 100))
            return profesional;
        }, 0);

        /*const array = this.profesionales.forEach(profesional => profesional += profesionalHonorarioIncrementado);
        helper.escrituraJson("profesionales", array);*/
        return profesionalHonorarioIncrementado;

    }
};

module.exports = consultorio;