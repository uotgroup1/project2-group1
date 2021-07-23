//import the squalize constructor from the library
const Sequelize = require('sequelize');
//create connection to the database (pass in username and password to dotenv)
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PW, {
    host:'localhost',
    dialect:'mysql',
    port:'3306'
})

module.exports = sequelize;