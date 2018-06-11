//requireds - por lo general van en el inicio.
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============='.green);


    for (i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            let resultado = (i * base);
            data += `${base} * ${i} = ${resultado}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

// listarTabla(base, limite)
//     .then(resultado => {
//         console.log(resultado);
//     })
//     .catch(err => {
//         console.log(err);
//     });