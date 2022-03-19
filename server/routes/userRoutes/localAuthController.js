const express = require('express');
const router = express.Router();
const req = require('express/lib/request');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { User } = require("../../models/User")
const config = require('../../config/key')
const { response, application } = require('express')
const cookieparser = require('cookie-parser')
const { auth } = require('../../middleware/auth')


//application/x-www-form-urlencoded 
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
router.use(cookieparser())

// mongoose.connect(
//     config.mongoURI, {})
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err))



router.get('/', (req, res) => res.send('stfu bitch'))
 
//The following function is mounted on the /register path. It is executed for any type
//of HTTP request on the /register path

router.post('/local-signup', (req, res) => {
    //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다
    const user = new User(req.body)
    //crypting password before saving to the database
    user.save((err, doc) => {
        console.log(doc)
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})


router.post('/local-login', (req, res) => {
    console.log('api reached')
    //first find whether requested email address exists in the database
    //mongodb method
    User.findOne({email: req.body.email}, async (err, user) => {
        if(!user){ //if user does not exist
            return res.json({
                loginSuccess: false,
                message: "Email address does not exist"
            })
        } 
        console.log('user found')
    //if email address exists in the database check whether password is correct
        // await user.comparePassword(req.body.password, (err, isMatch) => {
        //     //console.log('dumb')
        //     //console.log(isMatch)
        //     console.log('inside')
        //     if(!isMatch){
        //         console.log('within if')
        //         return res.json({
        //             loginSuccess: false,
        //             message: "Incorrect Password"
        //         })
        //     } 

        // }) 
        const validated = await user.comparePassword(req.body.password)
        if (!validated){
            console.log('within if')
            return res.json({
                loginSuccess: false,
                message: "Incorrect Password"
            })
        }
        console.log('password correct')
    //if password correct, create a token for the user
        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err) //400 means error
            // user contains token. we need to save it somewhere (cookie? local storage?)
            //to save it to cookie we need cookieparser
            res.cookie("x_auth", user.token)
            .status(200) //means success
            .json({
                loginSuccess: true,
                userID: user._id
            })
        })
    })
})


router.get('/auth', auth, (req, res) => {  //middleware implementation
    //by the fact that auth did not throw any error, anuthentication is true
    res.status(200).json({
        _id: req.user._id,
        //to be modified
        isAuth: true,
        email: req.user.email,
        name: req.uesr.firstname,
        lastname: req.user.lastname

    })
})


router.get('/local-logout', auth, (req, res) => {
    //find the user who want to log out
    User.findOneAndUpdate({
        _id: req.user._id
    },
    {
        token: ""
    }, (err, user) => {
        if (err) return res.json({
            success: false,
            err
        })
        return res.status(200).send({
            success: true
        })
    })

    //just removing token
})




module.exports = router