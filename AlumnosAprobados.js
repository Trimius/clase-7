let alumnos = [{
    nombre: 'Jeff',
    calificaciones: [8, 10, 6, 9]
},{
    nombre: 'Pedro',
    calificaciones: [6, 5, 6, 5]
},{
    nombre: 'Ana',
    calificaciones: [10, 7, 7, 10]
}]

for(let index = 0; index < alumnos.length; index++){
    const alumno = alumnos[index]
    //const calificaciones = 
    alumno.calificaciones 
    let sumaCalificaciones = 0
    for(let index2 = 0; index2 < alumno.calificaciones.length; index2++){
        sumaCalificaciones += alumno.calificaciones[index2]
    }
    const promedio = sumaCalificaciones / alumno.calificaciones.length
    if(promedio<6){
        console.log(alumno.nombre + ' tendra que repetir el curso, reprobo con ' + promedio);
    }
}