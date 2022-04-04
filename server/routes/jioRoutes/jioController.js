const express = require('express');
const bodyparser = require('body-parser')
const router = express.Router();
const { Location } = require('../../models/Location')
const { Jio } = require('../../models/Jio')
const { User } = require('../../models/User')
const { auth } = require('../../middleware/auth');
const { time } = require('console');
// router.use('bodyparser')


router.get('/', (req, res) => {
    res.send("Jio router")
})

router.post('/createjio2', (req, res) => {
    console.log('Backend: Within Create Jio')
    // console.log(req.session)

    const newJio = new Jio({
        jio_date_time: req.body.datetime,
        jio_header: req.body.header,
        jio_description: req.body.description,
        jioerID: req.body.userID,
        jioLocation: "default",
        jioStatus: "pending"
    })
    console.log(req.body + " 1")
    console.log(newJio + " 2")
    Jio.find({ $or: [
        { jioerID: req.body.userID },
        { jioeeID: req.body.userID }
    ] }, async (err, jio) => {
        if (jio) {
            return res.json({
                createSuccess: false,
                message: "User already has a jio, cant create or accpet another"
            })
        }
    })
    console.log("hello")
    newJio.save((err, doc) => {
        console.log(doc)
        if (err) {return res.json({success: false, err})}
        else {return res.status(200).json({
            success: true
        })}
    })

})

router.post('/createjio', (req, res) => {
    console.log('within create jio')
    //const newJio = req.body  //identify user
    // front end should pass json containing all information for location schema( pls refer to location model), start time and end time, date, jio description 
    //IN JSON FORMAT
    console.log(req.body)
    const newJio = new Jio({
        datetime: req.body.datetime,
        description: req.body.description,
        jioerID: req.body.userID,
        duration: req.body.duration
    })
    Jio.find({ $or: [
        { jioer: req.body.userID },
        { jioee: req.body.userID }
    ] }, async (err, jio) => {
        console.log(req.session.user)
        console.log(jio)
        if (jio.length > 0) {
            return res.json({
                createSuccess: false,
                message: "User already has a jio, cant create or accpet another"
            })
        }
        newJio.save((err, doc) => {
            console.log(doc)
            if (err) {
                return res.json({ success: false, err})
            } else {
                return res.status(200).json({
                    success: true
                })
            }     
        })
    })
    

})

router.post('/acceptjio', auth, (req, res) => {
    //request should contain the jio _id
    Jio.find({ $or: [
        { jioer: req.session.user._id },
        { jioee: req.session.user._id }
    ] }, async (err, jio) => {
        if (jio) {
            return res.json({
                createSuccess: false,
                message: "User already has a jio, cant create or accpet another"
            })
        }
    })
    Jio.findOneAndUpdate({ _id: req.body._id }, 
        { jioStatus: 'accepted' },
        { new: true }, (err, doc) => {
            if (err){
                console.log('Error in updating jio status')
            }
            console.log(doc)
        })
})

router.post('/cancel', auth, (req, res) => {
    Jio.deleteOne({ jioee: req.session.user._id }, (err) => {
        return res.json({
            deleteSuccess: false,
            message: "Jio does not exist or error"
        })
    })
})

    
    //check if user has overlapping jio in the jio db 
    //if exist return fail
    //else continue

    

    //using the location _id, creating user's _id, status: pending, date and time passed from the front end
    



router.post('/acceptjio', auth, (req, res) => {
    const user = req.user
    
})




module.exports = router;



