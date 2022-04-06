const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const PLACES_KEY = "AIzaSyA-1vQYn7cQBGGdn_7OkV4Lh073cXbQIdY";
const DISTANCE_KEY = "AIzaSyCcUJYXX35crcUUfuDg9dw74l-q-RkPoRc";


const getLocations = (req, res) => {
    const { radius, location } = req.query;
    // const USER_COORDINATE = "1.356220%2C103.691551";

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&key=${PLACES_KEY}&radius=${radius}&type=cafe&language=en`)
    .then(resp1 => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&key=${PLACES_KEY}&radius=${radius}&type=library&language=en`)
          .then(resp2 => {
            return res
              .status(200)
              .json([...resp1.data.results, ...resp2.data.results]);
          })
          .catch((err) => {
            console.error(err);
            return res.status(400).json({ success: false });
          });
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({ success: false });
    });
}

const getDistance = (req, res) => {
    const { origin, destination } = req.query;
    const UNITS = 'metric';
    const MODE = 'transit';

    if (!origin || !destination){
        return res
            .status(400)
            .json({ success: false, msg: "Please provide place id" });
    }

    axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?key=${DISTANCE_KEY}&destinations=${destination}&origins=place_id:${origin}&units=${UNITS}&mode=${MODE}`
    ).then(resp => {
        return res.status(200).json(resp.data.rows[0].elements[0].distance.value);
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({success:false});
    })
}

const getPlaceSearchID = (req,res) => {
    const { text } = req.query;
    const INPUT_TYPE = "textquery";

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${PLACES_KEY}&input=${text} Singapore&inputtype=${INPUT_TYPE}`
      )
      .then((resp) => {
        return res.status(200).json(resp.data.candidates[0].place_id);
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ success: false });
      });
}

const getPlaceCoordinates = (req,res) => {
    const { placeid } = req.query;
    const FIELD = 'geometry';

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?key=${PLACES_KEY}&place_id=${placeid}&fields=${FIELD}`
      )
      .then((resp) => {
        let lat = resp.data.result.geometry.location.lat;
        let lng = resp.data.result.geometry.location.lng;
        let coord = lat + "%2C" + lng;
        return res.status(200).json({
            coordinate: coord,
            lat: lat,
            lng: lng
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ success: false });
      });
}

const getPlaceDetails = (req,res) => {
    const { placeid } = req.query;
    const FIELD = 'name,formatted_address,type,rating,geometry,photos,website,opening_hours';

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?key=${PLACES_KEY}&place_id=${placeid}&fields=${FIELD}`
      )
      .then((resp) => {
        return res.status(200).json(resp.data);
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ success: false });
      });
}

const getPlacePhoto = (req,res) => {
  const { photoRef, width } = req.query;
  
  axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?&photo_reference=${photoRef}&maxwidth=${width}&key=${PLACES_KEY}`
  )
  .then(resp => {
    //console.log(resp.request.res.responseUrl);
    return res.status(200).json({ url: resp.request.res.responseUrl});
  })
  .catch(err => {
    console.error(err);
    return res.status(400).json({ success:false });
  });
}


router.route('/search').get(getLocations);
router.route('/distance').get(getDistance);
router.route('/placesearch').get(getPlaceSearchID);
router.route('/placecoordinates').get(getPlaceCoordinates);
router.route('/placedetails').get(getPlaceDetails);
router.route('/placephoto').get(getPlacePhoto);

module.exports = router;
