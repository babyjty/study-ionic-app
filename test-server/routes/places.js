const express = require('express');
const router = express.Router();
const { getLocations, getDistance} = require('../controllers/places');

router.route('/search').get(getLocations);
router.route('/distance').get(getDistance);

module.exports = router;