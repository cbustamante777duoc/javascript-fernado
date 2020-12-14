let juegos = ['mario kart', 'street fighter', 'mk3','donkey kong'];
/*saber la longuitud del arreglo */
console.log('largo:' +juegos.length);

/*se pueden realizar operaciones matematicas en los arreglos como por 
ejemplo aqui reste 4 - 3 = 1 entonce va a mostrar el elemento numero dentro del arreglo */
let primero = juegos[4-3];
console.log('primero '+primero);

/*una manera de mostrar el ultimo elemento dentro del arreglo */
let last = juegos[juegos.length - 1];
console.log('last'+last);

console.log({primero,last});
/*recorre los elementos dentro de un arreglo */
juegos.forEach((elemento,index,arr)=>{
    console.log({elemento,index,arr});
});
 
/*agregar un elemento al arreglo (ultimo) */
let nuevaLongitud = juegos.push('nuevo juego');
console.log(nuevaLongitud, juegos);

/*agregar un elemento al comienzo */
juegos.unshift('pes 2020');
console.log(juegos);

/*borrar el ultimo elemento del arreglo */
let juegoBorrado =juegos.pop();
console.log({juegoBorrado, juegos});

/*metodo splice se seleciona desde donde quieres corta y cuanto elementos */
let posicion = 1;
let juegosBorrados= juegos.splice(posicion,2);
console.log({juegosBorrados,juegos});

/*en caso que salga -1 significa que no lo encontro */
let donkeyIndex = juegos.indexOf('donkey kong');
console.log({donkeyIndex, juegos});
