/* pregunta si a es mayor a b si es de esta menera retorna a sino b */
const numeroMayor = (a,b) => (a > b ) ?`el numero es mayor ${a}` : `el numero es mayor ${b}`;

/* pregunta si es miembro si es miembro el valor es 2 sino el valor es 10 */
const tieneMembresia = (miembro) => (miembro) ? 'valor 2 dolares' : 'valor 10 dolares';


console.log(numeroMayor(3,6));
console.log(tieneMembresia(true));

const amigo = false;

const amigosArr=[
    'cristiano','luka','sergio',
    /* si la variable amigo es true bezema sino leo */
    amigo ? 'bezema' : 'leo'
];

console.log(amigosArr);

/* manera de hacer operador ternario con varios if */
const nota = 100;
const grado = nota >= 95 ? 'A+':
              nota >=90  ? 'A':
              nota >=85  ? 'B+':
              nota >= 80 ? 'B' : 'reprobado';
console.log({nota, grado});
