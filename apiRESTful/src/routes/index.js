const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'ok router'
    })
})

//pego ruta de productos a la ruta principal
const ProductsRouter = require('./products')
router.use('/products', ProductsRouter)

module.exports = router;