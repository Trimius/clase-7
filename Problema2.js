const asistencias = [true, true, false, true, true, false, false, true, true, true]
    let asistio = 0
    for(let index = 0; index<=asistencias.length; index++){
        if(asistencias [index]){
            asistio++
        }
        
    }
    const porcentaje = asistio / asistencias.length * 100
    console.log("El porcentaje de asistencias es de " + porcentaje + "%");