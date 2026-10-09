const Sequelize = require('sequelize');

const sequelize = new Sequelize('fot', 'root', 'Mahi@1234', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;