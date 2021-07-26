
const router = require('express').Router();

const homeRoutes = require('./homepage');
const apiRoutes = require('./api/');
const viewroute = require('./Viewroute');

router.use('/', viewroute);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;

