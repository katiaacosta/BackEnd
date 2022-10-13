class Contenedor {

    constructor(archivo){
      this.archivo = archivo;
    } 

    async validateExistFile(){
        try {
            await fs.promises.stat(nombreArchivo)
        } catch (err) {
            await fs.promises.writeFile(nombreArchivo, JSON.stringify([]))            
        }
    }

    //leo archivo y convierto el array de string, a objeto o array de objeto
    async obtenerProductos(){
        await this.validateExistFile();
        const dato = await fs.promises.readFile(nombreArchivo, 'utf-8');
        return dato;
    }

    //agrego nuevo producto al array de objetos.
    async guardarProducto(productos){
        await this.validateExistFile();
        await fs.promises.writeFile(nombreArchivo, JSON.stringify(productos, null, '\t'))        
    }

    //guarda objeto elemento en el archivo y devuelve id asignado
    async save(elemento){
        if (!elemento.title || !elemento.price || typeof elemento.title !== 'string' || typeof elemento.price !== 'number') throw new Error ('Datos invalidos');
        const productos = await this.obtenerProductos();
        let id = 1;
        if (productos.length){
            //obtengo el ultimo ID del arreglo de objetos, y le sumo uno para el nuevo producto
            id = productos[productos.length -1].id + 1
        }     
        const productoNuevo = {
            "title": elemento.title,
            "price": elemento.price,
            "thumbnail": elemento.thumbnail,
            "id": id,
        }
        productos.push(productoNuevo);
        await this.guardarProducto(productos);
    
    }

    //devuelve objeto con Id recibido, o null si no existe
    async getById(id){
        const productos = JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'));
        //devuelvo indice de primer elemento que cumpla la condicion
        const indice = productos.findIndex((elemento) => elemento.id === id);
        return productos[indice];        
    }

    //devuelve array con objetos presentes del archivo
    async getAll(){
        const dato = JSON.parse(await this.obtenerProductos());
        return dato;
    }

    //elimina objeto con id recibido, del archivo
    async deleteById(id){
        const productos = await this.obtenerProductos();
        const indice = productos.findIndex((elemento) => elemento.id === id);
        if (indice < 0 ){
            return
        }
        //devuelvo copia del array para reemplazar cosas del mismo
        productos.splice(indice,1)
        await this.guardarProducto(productos);
    }

    //elimina todos los elementos del archivo
    async deleteAll(){
        await this.guardarProducto([]);
    }
}
  
//importo librerias
const fs = require('fs');
const path = require('path');
//nombro mi archivo
const nombreArchivo = 'productos.json';

const contenedor = new Contenedor(nombreArchivo);

//------------------------------------------------------------------------------------
//express  
const express = require ('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`Para ver todos los productos agregue '/productos' a la URL, y para ver un producto aleatorio, agrege '/productoRandom'`)
})

const prod = [];
app.get('/productos', (req,res) => {
    contenedor.getAll().then((data) => {
        console.log(data);
        res.json(data)
    })
})

app.get('/productoRandom', (req,res) => {
    const number = (min, max) => {
        return Math.floor((Math.random() * (max - min)) + min);
    }
    const prodId=number(1, 10);
    contenedor.getById(prodId).then((data) => {
        console.log('imprimo por indice ' + prodId);    
        console.log(data);    
        res.json(data)
    })
})


const PORT = 8080
const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`);
})

//muestro error si existiera
connectedServer.on('error', error => console.log(`Error en servidor ${error}`));

