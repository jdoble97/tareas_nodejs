//import express from 'express'
const express = require("express")
const rutas = require('./routes/rutas')
const path = require('path')
const bodyParser = require('body-parser')
const helpers = require('./helpers')


//Creamos la conexión a la BBDD
const db = require('./config/db')
//Importamos el modelo
require('./models/Proyectos')
db.sync()//.authenticate() solo prueba si vale la conexion a la base de datos
    .then(() => {
        console.log('Conexión exitosa bbdd');
    })
    .catch(err => {
        console.error('Error de conexión bddd');
    });

//creando una app de express
const app = express();

//Donde cargaremos los archivos estáticos
app.use(express.static('public'));

//Habilitamos Pug
app.set("view engine", "pug");
//Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, './views'));

//Pasamos nuestras funciones al middleware
app.use((req, res, next) => {
    //Pasamos una función a la vista
    res.locals.convertirObjeto = helpers.convertirObjeto;
    next();
});
//Los app.use() llevan las funciones que ejecutara el middleware
app.use((req,res,next)=>{
    console.log('Soy el middleware, se va a ejecutar la siguiente función...')
    next()
})

//Habilitamos el bodyParser para leer datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rutas());

app.listen(9999, () => {
    console.log('Escuchando en el puerto 9999...')
});