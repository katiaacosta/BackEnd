const mensaje = "mensaje2";

export const saludar = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(mensaje);
        resolve();
    },2000)
})

// module.exports = {
//     saludar,
// } 