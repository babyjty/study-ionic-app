const express = require('express');
const router = express.Router();
const { 
    getLocations, 
    getDistance, 
    getPlaceSearchID, 
    getPlaceCoordinates } = require('../controllers/places');

router.route('/search').get(getLocations);
router.route('/distance').get(getDistance);
router.route('/placesearch').get(getPlaceSearchID);
router.route('/placecoordinates').get(getPlaceCoordinates);

module.exports = router;