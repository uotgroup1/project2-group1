// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// import module to encrypt password
const bcrypt = require('bcrypt');

// Initialize Product model (table) by extending off Sequelize's Model class
<<<<<<< HEAD
class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
=======
class Users extends Model {}
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641

// set up fields and rules for Product model
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
=======
      primaryKey: true
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        isEmail: true,
      },
=======
        isEmail: true
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [8], //Not sure what the length should be set it as 8
      },
    },
  },
  {
    // add hoooks here for password encryption
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
=======
        len: [8] //Not sure what the length should be set it as 8
      }
    }
  },
  {
    // add hoooks here for password encryption
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

<<<<<<< HEAD
module.exports = Users;
=======
module.exports = Users;
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
