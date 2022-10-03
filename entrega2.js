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
        await validateExistFile();
        const dato = JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'));
        return dato;
    }

    //agrego nuevo producto al array de objetos.
    async guardarProducto(productos){
        await validateExistFile();
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
        const archivo = await this.obtenerProductos();
        //devuelvo indice de primer elemento que cumpla la condicion
        const indice = archivo.findIndex((elemento) => elemento.id === id);
        if (indice < 0 ){
            //devuelvo null y termino ejecucion
            throw new Error('NULL');
        }
        return archivo[indice];        
    }

    //devuelve array con objetos presentes del archivo
    async getAll(){
        return await this.obtenerProductos();
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

contenedor.getAll().then((data) => {
    console.log(data);
})

contenedor.getById(4).then((data) => {
    console.log(data);
})

contenedor.save({
    "title": "ProductoNuevo",
    "price": 7863,
    "thumbnail": "urlNueva"
})

//descomentar luego de agregar el nuevo producto, para eliminarlo
contenedor.deleteById(11);

//descomentar al final, para que pueda verse el archivo json completo en la prueba de los otros metodos
// contenedor.deleteAll()
  
  
  
  
  