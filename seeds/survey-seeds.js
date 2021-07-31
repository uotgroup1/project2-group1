const { Survey } = require('../models');

const userSurvey = [
  {
    user_id: 1,
    newSurveyName: 'what your favourite browser',
    newSurveyQuestion: 'what is your passionet?',
    newSurveyAnswerOption: 'delevelopr, music, ...',
  },
  {
    user_id: 2,
    newSurveyName: 'what your favourite browser',
    newSurveyQuestion: 'what is your passionet?',
    newSurveyAnswerOption: 'delevelopr, music, ...',
  },
];

const SeedSurvey = () =>
  Survey.bulkCreate(userSurvey, { individualHooks: true });

module.exports = SeedSurvey;
