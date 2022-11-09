const express = require('express');
const { engine } = require('express-handlebars');
const { extname } = require('path');
const path = require('path');
const app = express();

// app.use(express.static('public'))
const public = path.resolve(__dirname, '../../public');
app.use(express.static(public))

const viewsFolderPath = path.resolve(__dirname, '../../views');
// const layoutsFolderPath = path.resolve(__dirname, '../../views/layouts');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;
const partialsFolderPath = `${viewsFolderPath}/partials`;

// app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);

// app.engine('handlebars', engine({
app.engine('hbs', engine({
    //configuracion de hbs
    layoutsDir: layoutsFolderPath,
    extname: 'hbs',
    defaultLayout: defaultLayoutPath,
    partialsDir: partialsFolderPath

}));

app.get('/', (req, res) => {
    // le paso nombre y apellido a lista 1
    const objetoConDataDinamica = {
                // productos: ['mate', 'cafe', 'harina', 'palmitos', 'yerba', 'mermelada', 'cacaop', 'picadillo']
        productos: [
            {name: 'mate', estilo: 'toplaner'},
            {name: 'cafe', estilo: 'midlaner'},
            {name: 'harina', estilo: 'toplaner'},
            {name: 'palmitos', estilo: 'midlaner'},
            {name: 'yerba', estilo: 'toplaner'},
            {name: 'mermelada', estilo: 'midlaner'},
            {name: 'cacao', estilo: 'toplaner'},
            {name: 'picadillo', estilo: 'midlaner'}            
        ],
        persona: {
            nombre: 'Katia',
            apellido: 'Acosta',
        },
        mostrarProductos: true
    }
    // res.render('main', {nombre: 'Katia', apellido: 'Acosta'});
    res.render('main', objetoConDataDinamica);
});

app.get('/visitas', (req, res) => {
    const objetoConDataDinamica = {
        nombre: 'KatiaVisitas',
        apellido: 'Acosta'
    }
    res.render('visitas', objetoConDataDinamica);
    // res.render('visitas', { layout : 'secundario'});
});

app.get('/contactenos', (req, res) => {
    const objetoConDataDinamica = {
        nombre: 'KatiaContactenos',
        apellido: 'Acosta'
    }
    res.render('contactenos', objetoConDataDinamica);
});

 app.get('/test', (req,res) => {
    res.json({
        msg:'ok'
    })
})

 module.exports = app;