'use strict';

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
    let peorCalificacion = Math.min(...calificaciones);
    return peorCalificacion;
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

const promedioMinimo = 65;

function filtrarEstudiantesAprobados(promedioMinimo) {
    let estudiantesAprobados = [];
    estudiantesAprobados = estudiantes.filter(estudiante => calcularPromedio(estudiante.calificaciones) >= promedioMinimo);
    return estudiantesAprobados;
}

console.log("Los estudiantes aprobados son: ", filtrarEstudiantesAprobados(promedioMinimo));

// Función para ordenar alfabeticamente los estudiantes por nombre

function ordenarEstudiantesPorNombre() {
    estudiantes.sort(function(estudianteA, estudianteB) {
        if (estudianteA.nombre < estudianteB.nombre) {
            return -1;
        } else if (estudianteA.nombre > estudianteB.nombre) {
            return 1;
        } else {
            return 0;
        }
    });
}

ordenarEstudiantesPorNombre();
console.log(mostrarEstudiantes(estudiantes));


// Función para generar reporte individual de cada estudiante

function generarReporteIndividual(nombreEstudiante) {
    //Buscar estudiante en el array estudiantes
    let estudianteEncontrado = estudiantes.find(function(estudiante){
        return estudiante.nombre === nombreEstudiante;
    });

    // Verificar si el estudiante existe
    if (estudianteEncontrado) {
        let calificaciones = estudianteEncontrado.calificaciones;

        let promedio = calcularPromedio(calificaciones);
        let mejorCalificacion = obtenerMejorCalificacion(calificaciones);
        let peorCalificacion = obtenerPeorCalificacion(calificaciones);

        let reporte = "Reporte del estudiante: " + estudianteEncontrado.nombre + "\n";
        reporte += "Calificaciones: " + calificaciones.join(", ") + "\n";
        reporte += "Promedio: " + promedio + "\n";
        reporte += "Mejor Calificación: " + mejorCalificacion + "\n";
        reporte += "Peor Calificación: " + peorCalificacion + "\n";

        console.log(reporte);
    } else {
        console.log("El estudiante con nombre '" + nombreEstudiante + "' no fue encontrado.");
    }
}

// Se debe poner el nombre del estudiante en el String
generarReporteIndividual("Josue");

// Función para Iniciar el gestor de calificaciones por consola

//Importar el prompt-sync para leer los datos desde la consola.
// const prompt = require('prompt-sync')();

// function iniciarGestionCalificaciones() {
//     let opcion = '';

//     while (opcion != '7') {
//         console.log("\n Menú de opciones Gestión de Calificaciones:");
//         console.log("1. Mostrar todos los estudiantes");
//         console.log("2. Agregar calificación a un estudiante");
//         console.log("3. Eliminar última calificación de un estudiante");
//         console.log("4. Generar reporte individual de un estudiante");
//         console.log("5. Mostrar estudiantes aprobados");
//         console.log("6. Ordenar estudiantes por nombre");
//         console.log("7. Salir.");

//         opcion = prompt("Elige una opción: ");

//         // Verificar la opción seleccionada
//         switch (opcion) {
//             case '1':
//                 console.log(mostrarEstudiantes(estudiantes));
//                 break;
//             case '2':
//                 let nombreAgregar = prompt("Nombre del estudiante: ");
//                 let nuevaCalificacion = parseFloat(prompt("Nueva calificación: "));
//                 console.log(agregarCalificacion(nombreAgregar, nuevaCalificacion));
//                 break;
//             case'3':
//                 let nombreEliminar = prompt("Nombre del estudiante: ");
//                 console.log(eliminarUltimaCalificacion(nombreEliminar));
//                 break;
//             case'4':
//                 let nombreReporte = prompt("Nombre del estudiante: ");
//                 generarReporteIndividual(nombreReporte);
//                 break;
//             case'5':
//                 let promedioMinimo = parseFloat(prompt("Promedio minimo para aprobar: "));
//                 console.log("Estudiantes aprobados: ", filtrarEstudiantesAprobados(promedioMinimo));
//                 break;
//             case'6':
//                 ordenarEstudiantesPorNombre();
//                 console.log("Estudiantes ordenados por nombre: ");
//                 console.log(mostrarEstudiantes(estudiantes));
//                 break;
//             case'7':
//                 console.log("Saliendo del programa... Hasta pronto!");
//                 break;
//             default:
//                 console.log("Opción invalida o no reconocida. Por favor intenta de nuevo.");
//                 break;
//         }
//     }
// }

// iniciarGestionCalificaciones();

// Función para Iniciar el gestor de calificaciones por el navegador
function iniciarGestionCalificaciones() {
    let opcion = '';

    while (opcion !== '7') {
        opcion = prompt("MENÚ DE CALIFICACIONES:\n" +
                        "1. Mostrar todos los estudiantes\n" +
                        "2. Agregar calificación\n" +
                        "3. Eliminar última calificación\n" +
                        "4. Generar reporte individual\n" +
                        "5. Mostrar estudiantes aprobados\n" +
                        "6. Ordenar estudiantes por nombre\n" +
                        "7. Salir del programa");

        switch(opcion) {
            case '1':
                alert(mostrarEstudiantes(estudiantes));
                break;
            case '2':
                let nombreAgregar = prompt("Nombre del estudiante:");
                let nuevaCalificacion = parseFloat(prompt("Nueva calificación:"));
                alert(agregarCalificacion(nombreAgregar, nuevaCalificacion));
                break;
            case '3':
                let nombreEliminar = prompt("Nombre del estudiante:");
                alert(eliminarUltimaCalificacion(nombreEliminar));
                break;
            case '4':
                let nombreReporte = prompt("Nombre del estudiante:");
                generarReporteIndividual(nombreReporte);
                break;
            case '5':
                let promedioMinimo = parseFloat(prompt("Promedio mínimo para aprobar:"));
                let aprobados = filtrarEstudiantesAprobados(promedioMinimo);
                alert("Estudiantes aprobados:\n" + aprobados.map(e => e.nombre).join(', '));
                break;
            case '6':
                ordenarEstudiantesPorNombre();
                alert("Estudiantes ordenados:\n" + estudiantes.map(e => e.nombre).join(', '));
                break;
            case '7':
                alert("Saliendo del programa... Hasta pronto");
                break;
            default:
                alert("Opción no válida. Intente nuevamente");
        }
    }
}

// Ejecutar el menú
iniciarGestionCalificaciones();
