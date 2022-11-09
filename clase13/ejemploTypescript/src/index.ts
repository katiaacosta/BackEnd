console.log('Ejecuto codigo typescript')

let num = 20
let pal = 'hola'
let desce = false

const misCamp: string[] = ['copa1', 'copa2', 'copa3', 'copa4'];

import Server from './services/server';
const puerto = 8080;
Server.listen(puerto, ()=>{
    console.log(`Escuchando puerto ${puerto}`);
    
})