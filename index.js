//import express from 'express'
const express = require("express")
const rutas = require('./routes/rutas')
const path = require('path')
const bodyParser = require('body-parser')

//creando una app de express
const app = express();

//Donde cargaremos los archivos estáticos
app.use(express.static('public'));

//Habilitamos Pug
app.set("view engine", "pug");
//Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, './views'));

//Habilitamos el bodyParser para leer datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rutas());

app.listen(9999);