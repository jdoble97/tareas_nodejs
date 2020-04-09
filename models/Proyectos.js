const Sequelize = require('sequelize')
const db = require('../config/db')
const shortId= require('shortid')
//Importamos slug
const slug = require('slug')


//Tabla en la base de datos tareas
const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    url: Sequelize.STRING
}, {
    hooks: {
        beforeCreate(proyecto) {
            const url = slug(proyecto.nombre).toLowerCase()
            proyecto.url = `${url}-${shortId.generate()}`
        }
    }
})
module.exports = Proyectos;