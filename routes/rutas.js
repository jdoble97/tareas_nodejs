const express = require('express')
const router = express.Router()
//importamos express validator, en este caso solo para el body
const { body } = require('express-validator')

//importar los controladores
const controladores = require('../controllers/controladores')

module.exports = function () {
    router.get('/', controladores.inicioController);
    router.get('/autor', controladores.autorController);
    router.get('/nuevo-proyecto', controladores.nuevoProyectoController)
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),//validamos en el router
        controladores.addProyectoController);
    router.get('/proyectos/:url',controladores.proyectoUrlController)
    return router;
}