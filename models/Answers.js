// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Answers extends Model {}

Answers.init(
  {
 // Model attributes are defined here
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    survey_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'survey',
        key: 'id'
      }
    },
    answer: {
      type:DataTypes.STRING,
      allowNull: false,
    }
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
