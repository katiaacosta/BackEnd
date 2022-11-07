const server = require('../src/services/server');

const puerto  = 8080;

server.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})