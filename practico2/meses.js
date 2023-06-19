const readlineSync = require('readline-sync');
let n = readlineSync.question('Para indicar el mes, ingresa un numero entero del 1 al 12: ');

 if(n == 1){
    n = "enero";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 2){
    n = "febrero";
    console.log("La cantidad de dias del mes de "+ n +" es 28");
}
else if (n == 3){
    n = "marzo";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 4){
    n = "abril";
    console.log("La cantidad de dias del mes de "+ n +" es 30");
}
else if (n == 5){
    n = "mayo";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 6){
    n = "junio";
    console.log("La cantidad de dias del mes de "+ n +" es 30");
}
else if (n == 7){
    n = "julio";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 8){
    n = "agosto";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 9){
    n = "septiembre";
    console.log("La cantidad de dias del mes de "+ n +" es 30");
}
else if (n == 10){
    n = "octubre";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else if (n == 11){
    n = "noviembre";
    console.log("La cantidad de dias del mes de "+ n +" es 30");
}
else if (n == 12){
    n = "diciembre";
    console.log("La cantidad de dias del mes de "+ n +" es 31");
}
else{
    // console.log("el dato ingresado no corresponde a un mes, por favor ingrese del a 1 al 12")
} 
 


