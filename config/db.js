const Sequelize = require('sequelize');
const sequelize = new Sequelize('tareas', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mariadb',
    port: '3306',
    define: {
        timestamps: false
    },
    dialectOptions: {
        timezone: 'Etc/GMT0' //for writing to database
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
module.exports = sequelize