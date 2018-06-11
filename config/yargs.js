const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('crear', 'crea un archivo txt de una tabla de multiplicar', opts)
    .command('listar', 'Imprime en consola una tabla de multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
}