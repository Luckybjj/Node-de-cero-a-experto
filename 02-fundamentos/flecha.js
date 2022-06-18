// las funciones de flecha tienen mucha ventajas y caracteristicas
// sobre las funciones tradicionales

// las funciones tradicionales se siguen ocupando pero solo para cosas especificas

// function sumar( a,b ) {
//     return a + b;
// }

// function suma( a,b = 10 ) {
//     return a + b;
// }


// una caractetistica interesante que tienen la funciones de flecha es que
// cuando su el cuerpo de la funcion unicamente solo tiene una linea se pueden borrar las llaves y el return

// const sumar = ( a,b ) => {
//     return a + b;
// } 


const sumar = ( a,b ) => a + b;

const saludar = () => 'Hola Mundo';
// equivalente
function saludo () {
    return 'Hola Mundo'
}

console.log( sumar( 5, 10));
// console.log( suma( 5 ));
console.log(saludar());
// console.log( saludo() );



