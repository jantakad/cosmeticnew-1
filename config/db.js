const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cosmetic_7wps', 'cosmetic_app_user', 'yWHCFm8QKXqqO0QqzIDzG3MDSldE4hZF', {
host: 'dpg-crvv1grtq21c738rc5gg-a',
dialect: 'postgres',
});

module.exports = sequelize;