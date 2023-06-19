/*3. */

const readlineSync = require('readline-sync');
let numEntero = readlineSync.question('Por favor, ingresa un numero entero: ');


if(numEntero >0 && numEntero%2 == 0){
console.log("El numero es positivo y par");
}
else if(numEntero >0 && numEntero%2 !== 0){
    console.log("El numero es positivo e impar");
}
else if(numEntero < 0){
    console.log("El numero es negativo");
}
else if(numEntero == 0){
    console.log("El numero es cero");
}

else{

} 
