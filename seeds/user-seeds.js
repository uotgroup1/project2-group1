const { Users } = require('../models');

const userData = [
  {
    user_name: "szali3",
    email: "Chrome",
    password: "ssss"
  },
  {
    user_name: "aaaa",
    email: "aaa@gsgs.com",
    password: "ssss"
  }
];

const seedUsers = () => Users.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;
