const { Questions } = require('../models');

const userQuestions = [
  {
    survey_id: 1,
    question_type: "mcq",
    question: "what your favourite browser",
  },
  {
    survey_id: 1,
    question_type: "mcq",
    question: "what your favourite drink",
  }
];

const SeedQuestions = () => Questions.bulkCreate(userQuestions,{individualHooks: true});

module.exports = SeedQuestions;
