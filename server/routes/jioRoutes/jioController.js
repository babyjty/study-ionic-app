const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const { Location } = require('../../models/Location')
const { Jio } = require('../../models/Jio')
const { User } = require('../../models/User')
const { auth } = require('../../middleware/auth');
const { time } = require('console');
// router.use('bodyparser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
//router.use(cookieParser())

router.get('/', (req, res) => {
    res.send("Jio router")
})


router.post('/createjio', (req, res) => {
    console.log('within create jio')
    //const newJio = req.body  //identify user
    // front end should pass json containing all information for location schema( pls refer to location model), start time and end time, date, jio description 
    //IN JSON FORMAT
    console.log(req.session)
    const newJio = new Jio({
        jio_date_time: req.body.datetime,
        jio_description: req.body.description,
        jioer: req.session.user._id,
        header: req.body.header,
        jio_duration: req.body.duration,
        jioLocation: "default",  //to be edited
        jioStatus: "pending",

    })
    Jio.find({ $or: [
        { jioer: req.session.user._id },
        { jioee: req.session.user._id }
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
            console.log('doc is')
            console.log(doc)
            console.log(err)
            if (err) {
                return res.json({ success: false, err})
            } else {
                return res.status(200).json({
                    createSuccess: true
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
        if (jio.length > 0 ) {
            return res.json({
                createSuccess: false,
                message: "User already has a jio, cant create or accpet another"
            })
        }
    })
    Jio.findOneAndUpdate({ _id: req.body.jioID }, 
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
        if (err){
            return res.json({
                deleteSuccess: false,
                message: err
            })
        }
        return res.json({
            deleteSuccess: true,
            message: "Jio deleted successfully"
        })
    })
})

    
    //check if user has overlapping jio in the jio db 
    //if exist return fail
    //else continue

    

    //using the location _id, creating user's _id, status: pending, date and time passed from the front end
    



router.get('/getjios', auth, (req, res) => {
    Jio.find({ $and: [
        { jioer: {$ne: req.session.user._id} },
        { jioee: {$ne: req.session.user._id} }
    ]}, (err, jio) => {
        if (err) {
            return res.json({
                findSuccess: false,
                message: "No jio in the database"
            })
        } else {
            return res.json(jio)
        }
    })
})




module.exports = router;



