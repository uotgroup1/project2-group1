// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    newSurveyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newSurveyQuestion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Option1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Option2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Option3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Option4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // newSurveyAnswerOption: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'survey',
  }
);

module.exports = Survey;
