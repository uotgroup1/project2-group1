const { Answers } = require('../models');

const answersData = [
  {
    question_id: 1,
    answer: "Chrome"
  },
  {
    question_id: 1,
    answer: "Firefox"
  },
  {
    question_id: 1,
    answer: "Mac OS X"
  },
  {
    question_id: 1,
    answer: "Android"
  }
];

const seedsAnswers = () => Answers.bulkCreate(answersData,{individualHooks: true});

module.exports = seedsAnswers;
