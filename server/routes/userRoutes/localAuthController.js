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
const { Jio } = require('../../models/Jio')
const passport = require('./passport')
const Passport = require('passport')


//const imageController = require('./imageController')


//application/x-www-form-urlencoded 
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
router.use(cookieparser())
router.use(express.json())
//router.use(express.bodyParser())

router.get('/', (req, res) => res.send('stfu bitch'))
 
//The following function is mounted on the /register path. It is executed for any type
//of HTTP request on the /register path

router.post('/register', (req, res) => {
    //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다
    console.log('Backend: Local Register')
    const user = new User(req.body)
    //crypting password before saving to the database
    User.findOne({email: req.body.email}, async (err, user) => {
        if (user){
            return res.json({
                result: false
            })
        }
    })
    user.save((err, doc) => {
        console.log(doc)
        if (err) return res.json({ success: false, err})
        else {
            req.session.user = doc
            req.session.save((err) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    })
                } else {
                    return res.json({
                        success: true,
                        userID: user._id
                    })
                }
            })
        }
    })
})



router.post('/local-login', (req, res) => {

    User.findOne({email: req.body.email}, async (err, user) => {
        if(!user){ //if user does not exist
            return res.json({
                loginSuccess: false,
                message: "Email address does not exist"
            })
        } 

        const validated = await user.comparePassword(req.body.password)
        if (!validated) {
            return res.json({
                loginSuccess: false,
                message: "incorrect password"
            })
        } else {
            console.log('validated')
            req.session.user = user
            // console.log(req.session.user)
            req.session.save((err) => {
                if (err) {
                    return res.json({
                        loginSuccess: false,
                        error: err
                    })
                } else {
                    return res.json({
                        loginSuccess: true,
                        userID: user._id
                    })
                }
            })
        }
    })
})




// Verify if account exists via email matching
router.post('/verify-account', (req, res) => {
    User.findOne({email:req.body.email}, async (err, user) => {
        console.log(req.body.email + "verify account");
        if(!user){
            return res.json({
                verifyresult: false
            })
        }
        req.session.user = user
        req.session.save()
        return res.json({
            userID: user._id,
            result: true
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
    req.session.destroy( (err) => {
        if (err) {
            res.status(400).json({
                logoutSuccess: false
            })
        } else {
            res.status(200).json({
                logoutSuccess: true,
                message: "User successfully logged out"
            })
        }
    })

    //just removing token
})





module.exports = router