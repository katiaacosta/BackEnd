"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Ejecuto codigo typescript');
let num = 20;
let pal = 'hola';
let desce = false;
const misCamp = ['copa1', 'copa2', 'copa3', 'copa4'];
const server_1 = __importDefault(require("./services/server"));
const puerto = 8080;
server_1.default.listen(puerto, () => {
    console.log(`Escuchando puerto ${puerto}`);
});
