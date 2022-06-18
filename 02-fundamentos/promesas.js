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

// const getEmpleado = (id, callback) => {


//     // resolve es un callback que se llamará cuando todo se hace correctamente
//     // reject es algo que se ejecuta cuando sucede un error

//     const promesa = new Promise((resolve, reject) => {

//         const empleado = empleados.find(e => e.id === id)?.nombre

//         if (empleado) {
//             resolve(empleado);
//         } else {
//             reject(`No existe empleado con id ${id}`)
//         }
//     });
//     return promesa
// }


// codigo optimizado
const getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });

}

const getSalario =  (id, callback) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el id ${id}`)
    });
}

const id = 2;

// getEmpleado(id)
//     // el error es porque no se esta manejado la escepcion.
//     // cada vez que se realice una promesa debe tener manejado el catch, debe atrapar el posible error.
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id) 
//     .then( salario => console.log(salario))
//     .catch ( err => console.log(err));

getEmpleado(id)
    .then( empleado => {
        getSalario(id)
            .then( salario => {
                console.log('El empleado:', empleado, 'tiene un salario de:', salario)
            })
            .catch ( err => console.log(err))
    })
    .catch( err => console.log(err))
    
