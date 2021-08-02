const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {                         //Model that is used to create Table in MYsql
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userEmail:{
         type: Sequelize.STRING,
         allowNull: false
    }     
});

//Note: createdAt and updatedAt columns will added to table automatically thanks to Sequelize package

module.exports = User;