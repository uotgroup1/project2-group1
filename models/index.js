const Survey = require('./Survey');
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

module.exports = {
  Survey,
  Users,
  Answers
};