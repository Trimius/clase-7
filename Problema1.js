var calificaciones = [8, 7, 10, 9, 8, 9, 10]
    let sumaCalificaciones = 0
    for(let index = 0; index<=calificaciones.length; index++){
        sumaCalificaciones += calificaciones[index]
    }  
    const promedio = sumaCalificaciones / calificaciones.length

      if(promedio>=8){
          console.log("Seguiras teniendo tu beca muchachon");
      }else{
      console.log("Chale, sigue participando");
      }