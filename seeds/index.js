const seedAnswers = require('./answers-seeds');
const seedUsers = require('./user-seeds');
const seedQuestion = require('./question-seeds');
const seedSurvey = require('./survey-seeds');
const seedUserAnswers = require('./userAnswers-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedAnswers();
  console.log('--------------');

  await seedQuestion();
  console.log('--------------');

  await seedSurvey();
  console.log('--------------');

  await seedUserAnswers();
  console.log('--------------');

  process.exit(0);
};

seedAll();
