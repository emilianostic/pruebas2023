
    const readlineSync = require('readline-sync');
    const numero = readlineSync.question('Por favor, ingresa un numero: ');
    
    if(numero > 0){
        console.log("El numero es positivo");
    }
    else if(numero == 0){
    console.log("El numero es cero");
    }
    else{
        console.log("El numero es negativo");
    }