/* siempre que haya una llave es un objeto */
let personaje = {
    nombre: 'tony stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['mark 1','mark 5', 'hulkboster'],
    direccion:{
        zip:'12456',
        ubicacion:'malibu, california'
    }
};
console.log('nombre',personaje.nombre);
console.log('edad', personaje.edad);
console.log('latitud',personaje.coords.lat);
console.log('longitud',personaje.coords.lng);
console.log('numero de trajes', personaje.trajes.length);
console.log('el ultimo traje', personaje.trajes[personaje.trajes.length - 1]);
/* una manera de imprimir una propiedad de un objeto */
const x = 'vivo';
console.log('vivo',personaje[x]);

//mas detalles

/* borrar una propiedad */

 delete personaje.edad;
 console.log(personaje);
 /* agregar un atributo al objeto */
 personaje.casado = true;
  
 const entriesPares = Object.entries(personaje);
 console.log('entries :>> ',entriesPares);

  /* congelar un objeto */
  Object.freeze(personaje);
  /* esta dos lineas de abajo no funciona por que el objeto esta congelado */
  personaje.dinero = 7897987987987;  
  personaje.vivo = true; 
  console.log(personaje);

  /* metodo que muestra un listado de todas las propiedas del 
  objeto */
  const propiedades = Object.getOwnPropertyNames(personaje);
  const valores = Object.values(personaje);
  console.log({propiedades, valores});