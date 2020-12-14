/* al momento de copiar un objeto o variable se puede dar que se copia la referencia donde 
se ubica el objeto esto puede ser un problema si se quiere modificar los atributos del nuevo 
objeto para evitar esto existen varios metodos uno el spread */

let a = 10;
let b = a;

a=30;
console.log({a,b});

/*copiar un objeto cambiando la referencia */
let juan = {nombre:'juan'};
let ana = {...juan};
ana.nombre = 'ana',
console.log({juan, ana});

/* {...} = cambiar la referencia */
const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});

/* arreglos */
const frutas = ['manzanas','peras','platanos'];
/*copia del arreglo para evitar el valor por referencia*/



console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('mango');

console.table({frutas, otrasFrutas});

// otra manera de hacerlo
/*https://platzi.com/blog/como-copiar-objetos-en-javascript-sin-morir-en-el-intento/ */
