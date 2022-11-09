const { v4: uuidv4 } = require('uuid');

class Productos {
  constructor() {
    this.productos = [
      { id: uuidv4(), title: 'Estante', price: 9862, thumbnail: "imagen" },
      { id: uuidv4(), title: 'Escritorio', price: 5789, thumbnail: "imagen" },      
    ];
  }

  getAll() {
    return this.productos;
  }

  save(data) {
    const nuevoProducto = {
      id: uuidv4(),
      title: data.title,
      price: data.price,
      thumbnail: data.thumbnail,
    };
    this.productos.push(nuevoProducto);
  }
}

const productosController = new Productos();

module.exports = productosController