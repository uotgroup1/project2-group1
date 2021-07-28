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
>>>>>>> d7b5eb73533ef26ab7942489c9b51619fb23d43b
    },
    survey_id: {
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
      type:DataTypes.STRING,
      allowNull: false
    },
   question: {
      type:DataTypes.STRING,
      allowNull: false
    }
>>>>>>> d7b5eb73533ef26ab7942489c9b51619fb23d43b
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
