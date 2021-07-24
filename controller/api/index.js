const router = require('express').Router();

const userRoutes = require('./user-routs');
const surveyRoutes = require('./surveysRoute');

router.use('/users', userRoutes);
router.use('/survey', surveyRoutes);

module.exports = router;
