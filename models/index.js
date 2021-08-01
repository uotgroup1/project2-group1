const Survey = require('./Survey');
const Questions = require('./Questions');
const Users = require('./Users');
const Answers = require('./Answers');

Users.hasMany(Survey, {
  foreignKey: 'user_id',
});

Survey.belongsTo(Users, {
  foreignKey: 'user_id',
});

Answers.belongsTo(Survey, {
  foreignKey: 'survey_id',
});

Survey.hasMany(Answers, {
  foreignKey: 'survey_id',
});
// Survey.hasMany(Questions, {
//   foreignKey: 'survey_id',
// });

// Questions.belongsTo(Survey, {
//   foreignKey: 'survey_id',
// });

// Questions.hasMany(Answers, {
//   foreignKey: 'question_id',
// });

// Answers.belongsTo(Questions, {
//   foreignKey: 'question_id',
// });

module.exports = {
  Survey,
  Questions,
  Users,
  Answers
};
