const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: '¿Que tabla deseas imprimir?',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: '¿Deseas listar la tabla en consola?',
        default: false,
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: '¿Hasta que numero necesitas imprimir',
        default: 12
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base y/o el limite de la tablas debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;

