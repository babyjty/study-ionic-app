const axios = require('axios').default;

const getLocations = (req, res) => {
    const { radius } = req.query;
    const PLACES_KEY = 'AIzaSyA-1vQYn7cQBGGdn_7OkV4Lh073cXbQIdY';
    const USER_COORDINATE = "1.356220%2C103.691551";

    if (!radius){
        return res
            .status(400)
            .json({ success:false, msg:"Please provide radius"});
    }

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${USER_COORDINATE}&key=${PLACES_KEY}&radius=${radius}&type=cafe`)
    .then(resp => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${USER_COORDINATE}&key=${PLACES_KEY}&radius=${radius}&type=library`)
          .then(resp2 => {
            console.log([...resp.data.results, ...resp2.data.results]);
            return res
              .status(200)
              .json([...resp.data.results, ...resp2.data.results]);
          })
          .catch((err) => {
            console.error(err);
            return res.status(400).json({ success: false });
          });
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({success:false});
    });
}

const getDistance = (req, res) => {
    const { origin, destination } = req.query;
    const DISTANCE_KEY = "AIzaSyCcUJYXX35crcUUfuDg9dw74l-q-RkPoRc";
    const UNITS = 'metric';
    const MODE = 'walking';

    if (!origin || !destination){
        return res
            .status(400)
            .json({ success: false, msg: "Please provide place id" });
    }

    axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?key=${DISTANCE_KEY}&destinations=${destination}&origins=place_id:${origin}&units=${UNITS}&mode=${MODE}`
    ).then(resp => {
        console.log(resp.data);
        return res.status(200).json(resp.data.rows[0].elements);
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({success:false});
    })
}

module.exports = {
    getLocations,
    getDistance
};