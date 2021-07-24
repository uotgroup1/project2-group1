const { UserAnswers } = require('../models');

const userAnswers = [
  {
    question_id: 1,
    answer_id: 1,
    user_id: 1
  },
  {
    question_id: 1,
    answer_id: 3,
    user_id: 2
  }
];

const SeedUseerAnswer = () => UserAnswers.bulkCreate(userAnswers,{individualHooks: true});

module.exports = SeedUseerAnswer;
