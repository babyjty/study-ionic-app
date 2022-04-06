const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const { Location } = require('../../models/Location')
const { Jio } = require('../../models/Jio')
const { User } = require('../../models/User')
const { auth } = require('../../middleware/auth');
const { time } = require('console');
const mergeJSON = require('merge-json')
// router.use('bodyparser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
//router.use(cookieParser())

router.get('/', (req, res) => {
    res.send("Jio router")
})


router.post('/createjio', (req, res) => {
    console.log('within create jio')
    console.log(req.body)
    const loc = new Location({
        name: req.body.jioLocation,
        address: req.body.jioAddress,
        rating: req.body.jioRating,
        image: req.body.jioImage,
        googleid: req.body.googleid,
        openingHours: req.body.openingHours
    })
    console.log(loc)

    const newJio = new Jio({
        jio_date_time: {
            formatted: req.body.datetimestring,
            ISO: req.body.datetime
        },
        jio_description: req.body.description,
        jioer: req.session.user._id,
        header: req.body.header,
        jio_duration: req.body.duration,
        jioStatus: "pending",
        location: "null",
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

router.post('/acceptjio', auth,  (req, res) => {
    //request should contain the jio _id
    
    Jio.find({ $or: [
        { jioer: req.session.user._id },
        { jioee: req.session.user._id }
    ] }, (err, jio) => {
        if (jio.length > 0 ) {
            return res.json({
                outcome: false,
                message: "User already has a jio, cant create or accpet another"
            })
        }
        Jio.findOneAndUpdate({
            _id: req.body._id
        },
        {
            jioStatus: 'accepted',
            jioee: req.session.user._id
        }, (err, jio) => {
            if (err) {
                return res.json({
                    outcome: false,
                    err
                })
            } else {
                console.log(jio)
                return res.json({
                    outcome: true
                })
            }
        })
    })
    
    // updatedjio.save({ 
    //     _id: req.body.jioID, 
    //     jioStatus: 'accepted',
    //     jioee: req.session.user._id
    // }, (err, doc) => {
    //         if (err){
    //             console.log('Error in updating jio status')
    //         } else {
    //             return res.json({
    //                 outcome: true
    //             })
    //         }
    //     })
})



router.post('/delete', auth, (req, res) => {
    Jio.deleteOne({ jioer: req.session.user._id }, (err) => {
        if (err){
            return res.json({
                deleteSuccess: false,
                message: err
            })
        } 
        console.log("back delete")
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
        { jioee: {$ne: req.session.user._id} },
        { jioStatus: 'pending' }
    ]}, async (err, jio) => {
        if (err) {
            return res.json({
                findSuccess: false,
                message: "No jio in the database"
            })
        } else {
            // User.findOne( {_id: jio.jioer}, (err, user) => {
            //     console.log(user)
            //     console.log(err)
            //     jio.jioer = user
            // })
            // Location.findById( { _id: jio.location}, (err, location) => {
            //     jio.location = location
            // })
            console.log(jio)
            return res.json(jio)
        }
    }).populate('jioer').populate('location')
})

router.get('/getmyjio', auth, (req, res) => {
    Jio.find({ $or: [
        { jioer: req.session.user._id },
        { jioee: req.session.user._id }
    ]}, async (err, jio) => {
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
            jio.jioer = req.session.user
            jio.findSuccess = true
            jio.isJioer = true
            jio.isJioee = false
            console.log(jio)
            return res.json(jio)
        } else {
            jio.jioer = req.session.user
            jio.findSuccess = true
            jio.isJioer = false
            jio.isJioee = true
            console.log(jio.isJioee)
            return res.json(jio)
        }
    }).populate('jioee').populate('jioer').populate('location')
})

router.post('/isjioer', auth, (req, res) => {
    if (req.body.jioer._id == req.session.user._id){
        return res.json({
            isjioer: true
        })
    } else {
        return res.json({
            isjioer: false
        })
    }
})

router.post('/withdrawjio', auth, (req, res) => {
    Jio.findOneAndUpdate({ jioee: req.session.user._id},
                        { jioStatus: "pending",
                          jioee: null }, (err, jio) => {
                              if (err) {
                                  return res.json({
                                      withdrawSuccess: false,
                                      err
                                  })
                              } else {
                                  return res.json({
                                      withdrawSuccess: true,
                                      message: "User successfully withdrawn from the jio"
                                  })
                              }
                          } )
})


module.exports = router;



