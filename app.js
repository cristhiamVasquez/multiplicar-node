//requireds
// const argv = require('yargs')
//     .command('crear', 'crea un archivo txt de una tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('listar', 'Imprime en consola una tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

//definir colores
const colors = require('colors');


//console.log(argv.base);

// variables
let comando = argv._[0];



switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        /*.then(resultado => {
            console.log(resultado);
        })
        .catch(err => {
            console.log(err);
        });*/
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo.green}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log(`No se reconoce el comando ${comando}!!!`);
};


// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(`el limite es ${argv.limite}`);


// let data = ''


// //Body
// for (let i = 1; i <= 10; i++) {
//     let resultado = (i * base);
//     data += `${base} * ${i} = ${resultado}\n`;
// };

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });



// crearArchivo(base)
//     .then(archivo => {
//         console.log(`Archivo creado: ${archivo}`);
//     })
//     .catch(err => {
//         console.log(err);
//     });