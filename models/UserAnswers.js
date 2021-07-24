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
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
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
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questions',
<<<<<<< HEAD
        key: 'id',
      },
=======
        key: 'id'
      }
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    },
    answer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'answers',
<<<<<<< HEAD
        key: 'id',
      },
=======
        key: 'id'
      }
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
<<<<<<< HEAD
        key: 'id',
      },
    },
=======
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
<<<<<<< HEAD
    modelName: 'useranswers',
  }
);

module.exports = UserAnswers;
=======
    modelName: 'userAnswers',
  }
);

module.exports = UserAnswers;
>>>>>>> daf11bef4f4de424896f8a85dce8e960c4a6b641
