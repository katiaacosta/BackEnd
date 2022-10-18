const { Router } = require('express');
const { ProductsController } = require('../controller/products')
const asyncHandler = require('express-async-handler')

const router = Router();

//armo rutas y devuelvo los metodos de la clase ProductsAPI en src\controller\products.js
router.get('/', (req, res) => {
    res.json({
        msg: ProductsController.getAll()
    })
})
//------------------------
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`vamos a leer ${id}`);
    const product = ProductsController.getById(id)
    res.json({
        msg: product
    })        
})
//------------------------
//como es asincronica, hay que pasar el error con next()
router.post('/', async (req, res, next) => {
    const { body } = req;
    try {
        const data = await ProductsController.save(body);
        res.json({
            msg: data
        })        
    } catch (err) {
        next(err);        
    }    
})
//------------------------
//libreria que permite envolver funcion async y manejar errores con sin try/catch
const funcionAsync = async(req, res) => {
    const id = req.params.id;
    const { body } = req;
    const data = await ProductsController.findByIdAndUpdate(id, body);
    res.json({
        msg: data
    })
}
router.put('/:id', asyncHandler(funcionAsync));
//------------------------
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        msg: ProductsController.findByIdAndDelete(id)
    })
})

module.exports = router;