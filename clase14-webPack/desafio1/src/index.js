// const { saludar: saludo1 } = require ('./modulos/modulo1');
// const { saludar: saludo2 } = require ('./modulos/modulo2');
// const { saludar: saludo3 } = require ('./modulos/modulo3');

import { saludar as saludo1 } from "./modulos/modulo1";
import { saludar as saludo2 } from "./modulos/modulo2";
import { saludar as saludo3 } from "./modulos/modulo3";

const miFuncionAsync = async () => {
    await saludo1();
    await saludo2();
    await saludo3();
}

miFuncionAsync();