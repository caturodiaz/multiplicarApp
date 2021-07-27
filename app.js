const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// const base = 4;

crearTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado' .green))
    .catch(err => console.log(err));