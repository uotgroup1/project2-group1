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
<<<<<<< HEAD
<<<<<<< HEAD
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    survey_ID: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'survey',
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
=======
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
=======
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
>>>>>>> refs/remotes/origin/database
      primaryKey: true,
    },
    survey_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'survey',
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
<<<<<<< HEAD
>>>>>>> farnoush
=======
>>>>>>> refs/remotes/origin/database
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
