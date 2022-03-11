const express = require('express');
const router = express.Router();
const getLocations = require('../controllers/places');

router.route('/search').get(getLocations);

module.exports = router;