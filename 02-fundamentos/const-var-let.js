// los problemas de var es que crea la variable en ambito global
// const y let crean variables de scope

const nombre = 'Wolverine';

if ( true ) {
    const nombre = 'Magneto';
    // console.log(nombre)

}


console.log(nombre)