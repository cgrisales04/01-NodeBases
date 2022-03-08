const fs = require('fs');

const crearArchivoAsync = async (tabla, listar = false, hasta = 12) => {
    try {
        let salida = '';

        for (let index = 0; index <= hasta; index++) {
            salida += `${index} * ${tabla} = ${index * tabla}\n`;
        }

        if (listar) {
            console.log("****************************");
            console.log(`*** Tabla multiplicar ${tabla} ****`);
            console.log("****************************");
            console.log(salida);
        }

        fs.writeFileSync(`./out/tabla-${tabla}.txt`, salida);
        return `tabla-${tabla}.txt`;

    } catch (error) {
        throw error;
    }
}

const crearArchivoPromise = (tabla) => {
    console.log("****************************");
    console.log(`*** Tabla multiplicar ${tabla} ****`);
    console.log("****************************");

    return new Promise((resolve, reject) => {
        let salida = '';

        for (let i = 0; i <= 12; i++) {
            salida += `${i} * ${tabla} = ${i * tabla}\n`;
        }

        if (salida) {
            fs.writeFileSync(`tabla-${tabla}.txt`, salida);
            resolve(`tabla-${tabla}.txt`)
        } else {
            reject(`No se creo el archivo tabla-${tabla}.txt`);
        }
    })
}

module.exports = {
    crearArchivoAsync,
    crearArchivoPromise
}