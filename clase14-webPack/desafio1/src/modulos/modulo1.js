const mensaje = "mensaje1";

export const saludar = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(mensaje);
        resolve();
    },1000)
})

// const miFuncionAsync = async() =>{
//     await saludar();
//     console.log('termino la primera');
// }
// miFuncionAsync();

// module.exports = {
//     saludar,
// } 