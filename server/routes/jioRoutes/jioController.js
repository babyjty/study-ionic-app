const express = require('express');
const router = express.Router();
const { Location } = require('../../models/Location')
const { Jio } = require('../../models/Jio')
const { User } = require('../../models/User')
const { auth } = require('../../middleware/auth')

router.get('/', (req, res) => {
    res.send("Jio router")
})

router.post('/createjio', auth, (req, res) => {
    const user = req.user  //identify user
    // front end should pass json containing all information for location schema( pls refer to location model), start time and end time, date, jio description 
    //IN JSON FORMAT

    //check if user has overlapping jio in the jio db 
    //if exist return fail
    //else continue

    // save location in the loation db first (to generate location _id)

    //using the location _id, creating user's _id, status: pending, date and time passed from the front end
    

})

module.exports = router;



