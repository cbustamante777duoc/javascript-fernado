/*forma tradicional */
function saludar(nombre){
    console.log('hola ' +nombre);
}

/* funcion anonima */
const saludar2 = function(nombre){
    console.log('hola ' +nombre);

}

/*funcion de flecha normal */
const saludarFlecha = () =>{
    console.log('hola desde flecha');
}

/* funcion de flecha con argumentos */
const saludarFlecha2 = (nombre, nombre2) =>{
    console.log(nombre+ ' y '+nombre2);
}

/* uso de las funciones */

saludar('cristian');
saludar2('bibi naked');
saludarFlecha();
saludarFlecha2('cristian','bibi naked');



