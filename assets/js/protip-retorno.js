/* funcion que va a crear un objeto persona con dos atributos */
function crearPersona(nombre, apellido){
    return{
       /*  nombre:nombre,
        apellido: apellido
        ya no necesario hacer esto*/
        nombre,apellido
    }
}

const persona = crearPersona('cristian','bustamante');
console.log(persona);

/* detructuracion */
const {nombre , apellido} = crearPersona('cristian','bustamante');
console.log({nombre,apellido});
 console.log('///////////////');

/* esto sirve en el caso que se quiere crear un objecto y retornarlo en una funcion de 
flecha */
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
const persona2 = crearPersona2('bibi', 'naked');
console.log(persona2);


/* manera de imprimir los arguments que vienen por defectos en la funciones normales */
function imprimirArgumentos(){
    console.log(arguments);
}

imprimirArgumentos(10,20,'hola','mundo',true);


/* manera de hacerlo mismo con funciones de flecha ya que esta no vienen con args por defecto */
const imprimirArgumentos2 = (...args) =>{
    return args;
}

imprimirArgumentos2(10,20,'hola','mundo',true);

/* destructurancion */
const [edad,valor,nacionalida,pais] = imprimirArgumentos2(10,20,'chilena','chile');
console.log({edad,valor,nacionalida,pais});


/*  un objeto */
let tony = {
    nombre: 'tony stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes:['mark 1','mark 5', 'hulkboster']

};

const imprimirPersona = ({nombre,codeName,vivo, edad, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimirPersona(tony);
