// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class UserAnswers extends Model {}

UserAnswers.init(
  {
<<<<<<< HEAD
 // Model attributes are defined here
=======
    // Model attributes are defined here
>>>>>>> farnoush
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true
=======
      primaryKey: true,
>>>>>>> farnoush
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questions',
<<<<<<< HEAD
        key: 'id'
      }
=======
        key: 'id',
      },
>>>>>>> farnoush
    },
    answer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'answers',
<<<<<<< HEAD
        key: 'id'
      }
=======
        key: 'id',
      },
>>>>>>> farnoush
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
<<<<<<< HEAD
        key: 'id'
      }
    }
=======
        key: 'id',
      },
    },
>>>>>>> farnoush
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'useranswers',
  }
);

<<<<<<< HEAD
module.exports = UserAnswers;
=======
module.exports = UserAnswers;
>>>>>>> farnoush
