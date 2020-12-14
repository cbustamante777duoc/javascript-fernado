/* funciones con retorno */
/* funcion clasica */
function sumar(a,b) {
    return a + b;
}

/* funcion moderna */
const sumar2 = (a,b) =>{
    return a + b;
}

/* version resumida de la funcion moderna la cual sirve solamente si tiene
una sola linea de codigo en el return */
const sumar3 = (a,b) => a + b;

/* funcion que retorna un numero aletorio con un min y max  redondiado*/
function getAleatorio(min, max){
    return Math.round( (Math.random() * (min,max) + min)) ;
}
/* funcion que retorna MODERNO un numero aletorio con un min y max  redondiado*/
const getAleatorio2 = (min,max) => Math.round( (Math.random() * (min,max) + min)) 

console.log(sumar(1,2)); 
console.log(sumar2(5,5));
console.log(sumar3(15,3));
console.log(getAleatorio(1,100));
console.log(getAleatorio2(1,100));