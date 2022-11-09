const express = require('express');
const productosController = require('../controller/productos');

const router = express.Router();

router.post('/', (req, res) => {
  const body = req.body;
  const nuevoProducto = {
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  };

  productosController.save(nuevoProducto);

  res.redirect('/')
});

module.exports = router