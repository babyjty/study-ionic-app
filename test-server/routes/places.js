const express = require('express');
const router = express.Router();
const { 
    getLocations, 
    getDistance, 
    getPlaceSearchID, 
    getPlaceCoordinates,
    getPlaceDetails,
    getPlacePhoto } = require('../controllers/places');

router.route('/search').get(getLocations);
router.route('/distance').get(getDistance);
router.route('/placesearch').get(getPlaceSearchID);
router.route('/placecoordinates').get(getPlaceCoordinates);
router.route('/placedetails').get(getPlaceDetails);
router.route('/placephoto').get(getPlacePhoto);

module.exports = router;