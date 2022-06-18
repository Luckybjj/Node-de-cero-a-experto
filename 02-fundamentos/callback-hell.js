// Infierno de los callbacks

// Hacer referencia a un callback dentro de otro callback, dentro de otro callback,
// dentro de otro callback, etc.

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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado) // mandamos el null porque el primer argumento de nuestro callback es el error.
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    // null check operator
    const salario = salarios.find(e => e.id === id)?.salario; // si todo lo de la linea regresa algo que no es ubdefined o null se ejecuta lo que sigue

        if (salario) {
            callback(null, salario)
        } else {
        callback(`No existe salario para el id ${id}`)
    }
}

// console.log(getEmpleado(3));

// getEmpleado( 5, ( empleado ) => {

//     console.log(empleado);
// })

const id = 3;

getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR!')
        return console.log(err)
    }
    getSalario(id, (err, salario) => {

        if ( err ) {
            return console.log(err)
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
           
    })
})




// getEmpleado(id, (err, empleado) => {

//     if (err) {
//         console.log('ERROR!')
//         return console.log(err)
//     }
//     console.log('Empleado existe!')
//     console.log(empleado.nombre);
// })

// getSalario(id, (err, salario) => {

//     if ( err ) {
//         console.log('ERROR!')
//         return console.log(err)
//     }
//     console.log('El sueldo es!')
//     console.log(salario);

// })