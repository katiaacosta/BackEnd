
// import { listen } from './services/server';
const sever = require('./services/server');

const puerto = 8080;
sever.listen(puerto, () => {
    console.log(`Servidor Http escuchando en el puerto ${puerto}`);
})
 