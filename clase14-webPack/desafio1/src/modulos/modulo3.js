const mensaje = "mensaje3";

export const saludar = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(mensaje);
        resolve();
    },3000)
})


// module.exports = {
//     saludar,
// } 