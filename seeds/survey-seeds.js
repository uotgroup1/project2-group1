const { Survey } = require('../models');

const userSurvey = [
  {
    user_id: 1,
    description: "Chrome",
  },
  {
    user_id: 2,
    description: "Hello",
  }
];

const SeedSurvey = () => Survey.bulkCreate(userSurvey,{individualHooks: true});

module.exports = SeedSurvey;
