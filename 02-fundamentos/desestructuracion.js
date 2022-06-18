

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50, 
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// console.log(deadpool.getNombre());

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    =  deadpool.poder;

// const { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);


// Una de las cosas interesantes de la desestructuración 
// es que se puede desestructurar el objeto directamente en el argumento 
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {

    console.log(nombre, apellido, poder, edad);

}

//imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman']

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const [ h1, h2, h3 ] = heroes;
const [ , , h3] = heroes;

console.log(h3)
// console.log(h1, h2, h3);

// De igualmanera podemos realizar la desestructuracion 
// de un arreglo en los argumentos de una función.











