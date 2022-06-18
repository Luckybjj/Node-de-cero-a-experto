// Cuando se dice que una función recibe un callback,
// es una función que se va a ejecutar despues en cierto punto del tiempo

// Los callbacks no son mas que una funcion que se manda como argumento.
 


// setTimeout() es una funcion que ejecuta una funcion en cierto momento del tiempo
// setTimeout( function() {
//     console.log('Hola Mundo')
// }, 1000);


// setTimeout( () => console.log('Hola Mundo'), 1000);

const getUsuarioByID = ( id, callback ) => {
    
    const usuario =  {
        id,
        nombre: 'Bryan',
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500)
}

getUsuarioByID( 10, ( usuario) => {
    console.log( usuario)
    console.log( usuario.id)
    console.log( usuario.nombre)
    console.log( usuario.nombre.toUpperCase());
});
