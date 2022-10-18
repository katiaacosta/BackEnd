//importo uuid, para generar ID unicos
const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid')



class ProductsAPI {
    constructor () {
        this.products = [
            {
                id: '1',
                title: 'Producto1',
                price: 1231,
                thumbnail: 'gs://luminatidecoracion.appspot.com/deco1.png'
            }
        ];
    }

    //recorro products para ver si existe el ID
    exists(id){
        const indice = this.products.findIndex(prod => prod.id === id)
        console.log(indice);
        return indice >= 0;
    }

    validateBody(element) {
        if (!element.title || !element.price || typeof element.title !== 'string' || typeof element.price !== 'number') throw createError(400,'Datos invalidos');
    }

    getAll() { 
        return this.products;
    }
    //METODO SINCRONICO
    getById(id){
        const exist = this.exists(id);
        // mandamos un error propio con http status y mensaje definido
        if (!exist) throw createError(404, 'El producto no existe') 
        const indice = this.products.findIndex(prod => prod.id == id)
        return this.products[indice];
    }

    save(element){
        this.validateBody(element);
        const newProduct = {
            id: uuidv4(),
            title: element.title,
            price: element.price,
            thumbnail: element.thumbnail,
        }
        this.products.push(newProduct);
        return newProduct;
    }

    findByIdAndUpdate(id, newData){
        const exist = this.exists(id);
        if (!exist) throw createError(404, 'El producto no existe') 
        this.validateBody(newData)
        const indice = this.products.findIndex(prod => prod.id == id)
        const oldProd = this.products[indice]
        const newProduct = {
            id: oldProd.id,
            title: newData.title,
            price: newData.price,
            thumbnail: newData.thumbnail,
        }
        this.products.splice(indice, 1, newProduct)
        return newProduct
    }

    findByIdAndDelete(id){
        const exist = this.exists(id);
        if (!exist) return;
        const indice = this.products.findIndex(prod => prod.id == id)
        this.products.splice(indice, 1)
    }

    random() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject(createError(404, 'El producto no existe'))
            }, 500)
        })
    }
}

const instanceProductAPI = new ProductsAPI();
//exporto instancia de productos
module.exports = {
    ProductsController : instanceProductAPI
}