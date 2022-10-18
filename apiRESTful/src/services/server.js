const { urlencoded } = require('express');
const express = require('express');
const mainRouter = require('../routes/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api' , mainRouter)

app.get('/', (req, res) => {
    res.json({
        msg: 'ok app'
    })
})

//manejo de errores en nuestras rutas, reponde error generico o definido, si las rutas ejecutan codito sincronico
app.use((err, req, res, next) => {
     //chequear si es un error random o 404
     const status = err.status || 500;
     const message = err.message || 'Internal Server Error';
     res.status(status).json({
         message,
         stack: err.stack,            
     })      
})

module.exports = app;