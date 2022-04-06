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

    const loc = new Location({
        name: req.body.jioLocation,
        address: req.body.jioAddress,
        rating: req.body.jioRating,
        image: req.body.jioImage,
        googleid: req.body.googleid
    })

    const newJio = new Jio({
        jio_date_time: req.body.datetime,
        jio_description: req.body.description,
        jioer: req.session.user._id,
        header: req.body.header,
        jio_duration: req.body.duration,
        jioStatus: "pending",
        location: "null" 
    })

    Location.findOne({ googleid: loc.googleid }, async (err, location) => {
        if (err) {
            return res.json({
                locationfindsuccess: false,
                err
            })
        }
        console.log('no error')
        if (location) {
            console.log('location exists in the db')
            newJio.location = location._id
        } else {
            console.log('location does not exist')
            await loc.save( async (err, returnloc) => {
                if (err) {
                    console.log(err)
                    return res.json({
                        createSuccess: false,
                        message: err
                    })
                } 
                console.log(returnloc._id)
                newJio.location = returnloc._id
                console.log('valid new jio')
                console.log(newJio)
            })
        }
  
        setTimeout(() => {
            Jio.find({ $or: [
                { jioer: req.session.user._id },
                { jioee: req.session.user._id }
            ] }, async (err, jio) => {
                console.log(jio)
                if (jio.length > 0) {
                    return res.json({
                        createSuccess: false,
                        message: "User already has a jio, cant create or accpet another"
                    })
                }
                await newJio.save((err, doc) => {
                    if (err) {
                        console.log(err)
                        return res.json({ success: false, err})
                    } else {
                        return res.status(200).json({
                            createSuccess: true
                        })
                    }     
                })
            })
        }, 1000);
    })
})


// router.post('/createjio', (req, res) => {
//     console.log('within create jio')

//     const loc = new Location({
//         name: req.body.jioLocation,
//         address: req.body.jioAddress,
//         rating: req.body.jioRating,
//         image: req.body.jioImage,
//         googleid: req.body.googleid
//     })

//     const newJio = new Jio({
//         jio_date_time: req.body.datetime,
//         jio_description: req.body.description,
//         jioer: req.session.user._id,
//         header: req.body.header,
//         jio_duration: req.body.duration,
//         jioStatus: "pending",
//         location: "null" 
//     })

//     Location.findOne({ googleid: loc.googleid }, async (err, location) => {
//         if (err) {
//             return res.json({
//                 locationfindsuccess: false,
//                 err
//             })
//         }
//         console.log('no error')
//         if (location) {
//             console.log('location exists in the db')
//             newJio.location = location._id
//             Jio.find({ $or: [
//                 { jioer: req.session.user._id },
//                 { jioee: req.session.user._id }
//             ] }, async (err, jio) => {
//                 console.log(jio)
//                 if (jio.length > 0) {
//                     return res.json({
//                         createSuccess: false,
//                         message: "User already has a jio, cant create or accpet another"
//                     })
//                 }
//                 await newJio.save((err, doc) => {
//                     if (err) {
//                         console.log(err)
//                         return res.json({ success: false, err})
//                     } else {
//                         return res.status(200).json({
//                             createSuccess: true
//                         })
//                     }     
//                 })
//             })
//         } else {
//             console.log('location does not exist')
//             await loc.save( async (err, returnloc) => {
//                 if (err) {
//                     console.log(err)
//                     return res.json({
//                         createSuccess: false,
//                         message: err
//                     })
//                 } 
//                 console.log(returnloc._id)
//                 newJio.location = returnloc._id
//                 console.log('valid new jio')
//                 console.log(newJio)
//                 Jio.find({ $or: [
//                     { jioer: req.session.user._id },
//                     { jioee: req.session.user._id }
//                 ] }, async (err, jio) => {
//                     console.log(jio)
//                     if (jio.length > 0) {
//                         return res.json({
//                             createSuccess: false,
//                             message: "User already has a jio, cant create or accpet another"
//                         })
//                     }
//                     await newJio.save((err, doc) => {
//                         if (err) {
//                             console.log(err)
//                             return res.json({ success: false, err})
//                         } else {
//                             return res.status(200).json({
//                                 createSuccess: true
//                             })
//                         }     
//                     })
//                 })
//             })
//         }
  
        
//     })
// })

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
    



router.get('/getjios', auth, async (req, res) => {
    Jio.find({ $and: [
        { jioer: {$ne: req.session.user._id} },
        { jioee: {$ne: req.session.user._id} }
    ]}, async (err, jio) => {
        if (err) {
            return res.json({
                findSuccess: false,
                message: "No jio in the database"
            })
        } else {
            jio.jioer = await User.findById({ _id: jioer._id }, (err) => {
                console.log(err)
            })
            return res.json(jio)
        }
    })
})

router.get('/getmyjio', auth, (req, res) => {
    Jio.find({ $or: [
        { jioer: req.session.user._id },
        { jioee: req.session.user._id }
    ]}, (err, jio) => {
        if (err) {
            return res.json({
                findSuccess: false,
                message: err
            })
        }
        if (jio.length < 1) {
            return res.json({
                findSuccess: false,
                message: "No jio in the database"
            })
        } else if (jio.jioer == req.session.user._id){
            jio.findSuccess = true
            jio.isJioer = true
            jio.isJioee = false
            return res.json(jio)
        } else {
            jio.findSuccess = true
            jio.isJioer = false
            jio.isJioee = true
            return res.json(jio)
        }
    })
})



module.exports = router;



