const { Survey } = require('../models');

const userSurvey = [
  {
    user_id: 1,
    description: "what your favourite browser",
  },
  {
    user_id: 2,
    description: "what your favourite food",
  }
];

const SeedSurvey = () => Survey.bulkCreate(userSurvey,{individualHooks: true});

module.exports = SeedSurvey;
