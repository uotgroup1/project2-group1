// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Questions extends Model {}

// set up fields and rules for Product model
Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true,
=======
      primaryKey: true
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    },
    survey_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'survey',
<<<<<<< HEAD
        key: 'id',
      },
    },
    question_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======
        key: 'id'
      }
    },
    question_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
   question: {
      type: DataTypes.STRING,
      allowNull: false
    }
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'questions',
  }
);

module.exports = Questions;
