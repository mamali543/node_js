const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define(
    'user',  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: Sequelize.STRING,
    mail:Sequelize.STRING
});

module.exports = User;