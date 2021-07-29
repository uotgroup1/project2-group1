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
<<<<<<< HEAD
<<<<<<< HEAD
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
=======
=======
>>>>>>> refs/remotes/origin/database
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
<<<<<<< HEAD
>>>>>>> farnoush
=======
>>>>>>> refs/remotes/origin/database
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
<<<<<<< HEAD
<<<<<<< HEAD
      defaultValue: true
    }
=======
      defaultValue: true,
    },
>>>>>>> farnoush
=======
      defaultValue: true,
    },
>>>>>>> refs/remotes/origin/database
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey',
  }
);

module.exports = Survey;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> farnoush
=======
>>>>>>> refs/remotes/origin/database
