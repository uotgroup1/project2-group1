const router = require('express').Router();

const apiRoutes = require('./api/');
const viewroute = require('./Viewroute');

router.use('/', viewroute);
router.use('/api', apiRoutes);

module.exports = router;
