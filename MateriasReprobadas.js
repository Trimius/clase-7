let alumnos = [{
    nombre: 'Carlos',
    materias = [{
        clase: 'Matematicas',
        calificaciones: [8, 7, 9]
    },{
        clase: 'Biologia',
        calificaciones: [5, 5, 6]
    },{
        clase: 'Informatica',
        calificaciones: [9, 8, 10]
    }],
    nombre: 'Hazel',
    materias = [{
        clase: 'Matematicas',
        calificaciones: [8, 9, 8]
    },{
        clase: 'Biologia',
        calificaciones: [9, 7, 10]
    },{
        clase: 'Informatica',
        calificaciones: [5, 6, 5]
    }]
}]

for(let index = 0; index<alumnos.length; index++){
    let alumno = alumnos[index]
    alumno.materias
    
    for(let index2 = 0; index2<materias.length; index2++){
        let materia = materias[index2]
        materia.calificaciones
        let sumaCalificaciones = 0

        for(let index3 = 0; index3<calificaciones.length; index3++){
            sumaCalificaciones += materias.calificaciones[index3]
        }
        const promedio = sumaCalificaciones / materias.calificaciones.length
        if(promedio<6){
            console.log(alumno.nombre + ' reprobo ' + materia.clase + ' con un promedio de ' + promedio);
        }
       }
}