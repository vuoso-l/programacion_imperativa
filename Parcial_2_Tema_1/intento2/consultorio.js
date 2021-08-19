const helper = require(__dirname + "/helper");
const profesionalesJson = helper.lecturaJson("profesionales");

const consultorio = {
    profesionales: profesionalesJson,
    mostrarUnArrayDeProfesionales: function (profesional) {
        return {
            identificador: profesional.identificador,
            nombre: profesional.nombre,
            especialidad: profesional.especialidad,
            honorarioConsulta: profesional.honorarioConsulta,
            habilitado: profesional.estaHabilitado ? "sí" : "no",
        };
    },
    listarTodos: function (profesionales) {
        return profesionales.map(profesional => consultorio.mostrarUnArrayDeProfesionales(profesional));
        /*
        profesionales.forEach(profesional => {
            console.log("El nombre del profesional es " + profesional.nombre + ", su especialidad es " + profesional.especialidad + " y por consulta cobra $" + profesional.honorarioConsulta + ". ¿Se encuentra habilitado? " + profesional.estaHabilitado + ".");
        });
        profesionales.forEach(profesional => {
            console.table( {
                [profesional.identificador]:{          
                nombre: profesional.nombre,
                especialidad: profesional.especialidad,
                honorarios: profesional.honorarioConsulta,
                cantidadConsultas: profesional.cantidadConsultas,
                habilitado: profesional.estaHabilitado,
            }});
        });*/
    },
    filtrarHabilitados: function (condicionHabilitacion) {
        return this.profesionales.filter((profesional) => profesional.estaHabilitado === condicionHabilitacion);
    },
    buscarPorNombre: function (nombreProfesional) {
        return this.profesionales.find((profesional) => {
            if (profesional.nombre === nombreProfesional) {
                return profesional;
            }
        });
    },
    incrementarHonorarios: function (nombreProfesional, porcentajeIncremento) {
        const profesionalBuscado = this.buscarPorNombre(nombreProfesional).reduce((total, profesional) => {
            profesional.honorarioConsulta += (total + ((profesional.honorarioConsulta * porcentajeIncremento) / 100))
            return profesional;
        }, 0);
        this.profesionales.forEach(profesional => profesional += profesionalBuscado);
        helper.escrituraJson("profesionales", this.profesionales);
        return profesionalBuscado;
    }
};

module.exports = consultorio;