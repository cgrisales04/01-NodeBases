const { crearArchivoAsync, crearArchivoPromise } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');

crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(response => console.log(response))
    .catch(err => console.log(err))

console.log(argv);

