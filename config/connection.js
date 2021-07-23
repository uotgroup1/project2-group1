<<<<<<< HEAD
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
=======
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
>>>>>>> e56dddbfbcad0c3684b9a5fc69dbc77f65092213
