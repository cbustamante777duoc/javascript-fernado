 const dia = 1; //0= domingo
 const horaActual = 10;

 let horaApertura;
 let mensaje;  // esta abierto, esta cerrado, hoy abrimos a las xx

 //pregunta si es sabado o domingo
 /*if (dia===6 || dia===0) {
     console.log('fin de semana');
     horaApertura = 9;
 }else{
     console.log('dia de semana');
     horaApertura = 11;
 }
*/

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
/*
 if (horaActual >= horaApertura) {
     mensaje = 'Esta abierto';
     
 }else{
     mensaje = `esta cerrado, abrimos ${horaApertura}`
 }
*/

/* el operador ternario primero se hace la condicion : los punto es igual a un else */

mensaje = (horaActual >= horaApertura) ? 'esta abierto' : `esta cerrado, abrimos ${horaApertura}`;
 console.log({horaApertura, mensaje});

/* PARA PREGUNTAR MAS DE UNA OPCION
    var firstCheck = false,
        secondCheck = false,
        access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";
      
    console.log( access ); // muestra "Acceso Permitido" 
 */