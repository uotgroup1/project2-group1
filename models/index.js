const Survey = require('./Survey');
const Questions = require('./Questions');
const Users = require('./Users');
const Answers = require('./Answers');
const UserAnswers = require('./UserAnswers');

Users.hasMany(Survey, {
  foreignKey: 'user_id'
});

Survey.belongsTo(Users,{
  foreignKey: 'user_id'
});

Survey.hasMany(Questions,{
  foreignKey: 'survey_id'
});

Questions.belongsTo(Survey,{
  foreignKey: 'survey_id'
});

Questions.hasMany(Answers,{
  foreignKey: 'question_id'
});

Answers.belongsTo(Questions,{
  foreignKey: 'question_id'
});

Questions.belongsToMany(Answers, {
  through: UserAnswers,
 
  foreignKey: 'question_id',
});

Answers.belongsToMany(Questions, {
  through: UserAnswers,
  
  foreignKey: 'answer_id',
});

UserAnswers.belongsTo(Users,{
  foreignKey: 'user_id'
});

Users.hasMany(UserAnswers,{
  foreignKey: 'user_id'
});

module.exports = {
  Survey,
  Questions,
  Users,
  Answers,
  UserAnswers,
};
