let alumnos = [{
    nombre: 'Carlos',
    materias: [{
        clase: 'Matematicas',
        calificaciones: 8
    },{
        clase: 'Biologia',
        calificaciones: 5
    },{
        clase: 'Informatica',
        calificaciones: 9
    }],
},{
    nombre: 'Hazel',
    materias: [{
        clase: 'Matematicas',
        calificaciones: 8
    },{
        clase: 'Biologia',
        calificaciones: 9
    },{
        clase: 'Informatica',
        calificaciones: 5
    }]
}]

for(let index = 0; index<alumnos.length; index++){
    let nombreAlumno = ''
    for(let index2 = 0; index2<alumnos[index].materias.length; index2++){
        if(alumnos[index].materias[index2].calificaciones<6){
            nombreAlumno =alumnos[index].nombre
            console.log(nombreAlumno);
            console.log(alumnos[index].materias[index2]);
            
        }
    }
}