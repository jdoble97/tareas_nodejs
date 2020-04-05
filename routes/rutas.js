const express = require('express')
const router = express.Router()

//importar los controladores
const controladores = require('../controllers/controladores')

module.exports = function () {
    router.get('/', controladores.inicioController);
    router.get('/autor',controladores.autorController);
    router.get('/nueva-baraja', controladores.nuevaBarajaController)
    router.post('/nueva-baraja',controladores.addBarajaController)
    return router;
}