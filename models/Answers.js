// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Answers extends Model {}

Answers.init(
  {
<<<<<<< HEAD
    // Model attributes are defined here
=======
 // Model attributes are defined here
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id',
      },
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.STRING,
      references: {
        model: 'answers',
        key: 'id'
      }
    }
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'answers',
  }
);

module.exports = Answers;
