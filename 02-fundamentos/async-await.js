const empleados = [
    {
        id: 1,
        nombre: 'Bryan',

    },
    {
        id: 2,
        nombre: 'Linda',

    },
    {
        id: 3,
        nombre: 'Karen',

    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,

    },
    {
        id: 2,
        salario: 1500,

    },
];

// codigo optimizado
const getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}

const getSalario = (id, callback) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el id ${id}`)
    });
}

// async-await es un termino muy pupular del mundo de las promesas
// el await le dice a JavaScript esperate aqui hasta que tengas la respuesta de la promesa se lo asignas a donde sea que lo necesite
// el unico inconveniente de usar async-await es que tiene que estar dentro de una función o método asíncrono

// cuando se pone el async es tranformar la funcion para que retorne una promesa


const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;

    } catch (error) {
        throw error;
    }
    // cuando se llama al throw, inmediatamente se esta llamando el "reject" de la función asíncrona,
    // en consecuencia donde sea que se utilice se llamaria al catch

}

const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    }) 
    .catch( err => {
        console.log('TODO MAL');
        console.log(err)
    });




