/* funcion que retorna un true */
const regresaTrue = () =>{
    console.log('regresa true');
    return true;
}

/* funcion que retorna un false */
const regresaFalse = () =>{
    console.log('regresa false');
    return false;
}

console.log(true);
console.log(!true); //false
console.log(!false); //true
console.log(!regresaFalse()); // true
console.log(!regresaTrue()); //false

console.warn('and'); //regresa true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && false); //false

console.exception('////////////');
console.log(regresaFalse() && regresaTrue()); //false solo se va a ejecutar el comienzo
console.warn('***************');
console.log('OR'); // lo una codicion basta para que retorne un true
console.log(true || false || false); //true asi funciona el ||
console.log(regresaFalse() || regresaTrue());