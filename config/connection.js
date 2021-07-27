const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
<<<<<<< HEAD
      port: 3306,
=======
      port: 3306
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    });

module.exports = sequelize;
