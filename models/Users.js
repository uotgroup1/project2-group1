// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// import module to encrypt password
const bcrypt = require('bcrypt');

// Initialize Product model (table) by extending off Sequelize's Model class
<<<<<<< HEAD
class Users extends Model {}
=======
class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
>>>>>>> farnoush

// set up fields and rules for Product model
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
=======
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> farnoush
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        isEmail: true
      }
=======
        isEmail: true,
      },
>>>>>>> farnoush
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [8] //Not sure what the length should be set it as 8
      }
    }
  },
  {
    // add hoooks here for password encryption
=======
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
>>>>>>> farnoush
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
>>>>>>> farnoush
