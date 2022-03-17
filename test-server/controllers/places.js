const axios = require('axios').default;

const getLocations = (req, res) => {
    const { radius } = req.query;
    const KEY = 'AIzaSyA-1vQYn7cQBGGdn_7OkV4Lh073cXbQIdY';
    const USER_COORDINATE = "1.356220%2C103.691551";

    if (!radius){
        return res.status(400).json({ success:false, msg:"Please provide radius"});
    }

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${USER_COORDINATE}&key=${KEY}&radius=${radius}&type=cafe`)
    .then(resp => {
        console.log(resp.data);
        return res.status(200).json(resp.data.results);
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({success:false});
    });
}

module.exports = getLocations;