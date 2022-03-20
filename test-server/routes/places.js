const express = require('express');
const router = express.Router();
const { 
    getLocations, 
    getDistance, 
    getPlaceSearchID, 
    getPlaceCoordinates,
    getPlaceDetails } = require('../controllers/places');

router.route('/search').get(getLocations);
router.route('/distance').get(getDistance);
router.route('/placesearch').get(getPlaceSearchID);
router.route('/placecoordinates').get(getPlaceCoordinates);
router.route('/placedetails').get(getPlaceDetails);

module.exports = router;