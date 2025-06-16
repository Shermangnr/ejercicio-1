'use stict';

// Array con 5 estudiantes y 5 calificaciones diferentes
let estudiantes = [
    { nombre: "Carlos", calificaciones: [85, 90, 78, 92, 95] },
    { nombre: "David", calificaciones: [60, 50, 98, 70, 80] },
    { nombre: "Luisa", calificaciones: [80, 40, 75, 80, 20] },
    { nombre: "Josue", calificaciones: [20, 30, 10, 50, 80] },
    { nombre: "Valentina", calificaciones: [85, 90, 78, 92, 80] },
    { nombre: "Kimich", calificaciones: [] }
];

// Funcion para mostrar los estudiantes

function mostrarEstudiantes(estudiantes) {
    let mostrarEstudiante = '';
    let totalEstudiantes = '';
    estudiantes.forEach((estudiante) => {
        mostrarEstudiante = 'Estudiante: ' + estudiante.nombre + '\nCalificaciones: ';
        estudiante.calificaciones.forEach((calificion, index) =>{
            if (index === 0) {
                mostrarEstudiante += '' + calificion;
            } else {
                mostrarEstudiante += ', ' + calificion;
            }
        });
        totalEstudiantes += mostrarEstudiante + '\n';
    });
    return totalEstudiantes;
};

console.log(mostrarEstudiantes(estudiantes)); 

// Función para calcular el promedio de las calificaciones

const calificaciones = [14, 60, 90, 55, 30];

function calcularPromedio(calificaciones) {
    let valorInicial = 0;
    let totalCalificaciones = calificaciones.reduce((total, valor) => total + valor, valorInicial)
    let numeroCalificaciones = calificaciones.length;
    let promedio = totalCalificaciones / numeroCalificaciones;
    promedio = promedio.toFixed(2);
    return promedio;
};

console.log(calcularPromedio(calificaciones));

// Función para obtener la mejor calificacion

function obtenerMejorCalificacion(calificaciones) {
    let mejorCalificacion = Math.max(...calificaciones);
    return mejorCalificacion;
};

console.log(obtenerMejorCalificacion(calificaciones));

// Función para obtener la peor calificacion

function obtenerPeorCalificacion(calificaciones) {
    let mejorCalificacion = Math.min(...calificaciones);
    return mejorCalificacion;
};

console.log(obtenerPeorCalificacion(calificaciones));

// Funcion para agregar una calificacion a un estudiante.

function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
    let estudianteEncontrado = estudiantes.find(function(estudiante) {
        return estudiante.nombre === nombreEstudiante;
    });
    if (estudianteEncontrado) {
        estudianteEncontrado.calificaciones.push(nuevaCalificacion);
    } else {
        estudianteEncontrado = 'No se encontro al estudiante';
    }
    return estudianteEncontrado;
}

// Agregar valores en los parametros
console.log(agregarCalificacion("Carlos", 69));

// Funcion para eliminar la ultima calificacion de un estudiante

function eliminarUltimaCalificacion(nombreEstudiante) {
    let estudianteEncontrado = estudiantes.find(function(estudiante) {
        return estudiante.nombre === nombreEstudiante;
    });
    if (estudianteEncontrado) {
        if (estudianteEncontrado.calificaciones.length > 0) {
            estudianteEncontrado.calificaciones.pop();
        } else {
            estudianteEncontrado = 'El estudiante no tiene calificaciones aún.'
        }
    } else {
        estudianteEncontrado = 'No se encontro al estudiante.';
    } 
    return estudianteEncontrado;
}

// Agregar valores en los parametros
console.log(eliminarUltimaCalificacion("Luisa"));

// Funcion para mostrar los estudiantes con promedio arpobado

const promedioMinimo = 80;

function filtrarEstudiantesAprobados(promedioMinimo) {
    let estudiantesAprobados = [];
    estudiantesAprobados = estudiantes.filter(estudiante => calcularPromedio(estudiante.calificaciones) >= promedioMinimo);
    return estudiantesAprobados;
}

console.log("Los estudiantes aprobados son: ", filtrarEstudiantesAprobados(promedioMinimo));



