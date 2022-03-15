const express = require('express')
const router = express.Router()
const passport = require('./passport')
const session = require('express-session')
const bodyParser = require('body-parser')

router.use(session({
    secret: 'iwantacat',
    resave: false,
    saveUninitialized: true
}))
router.use(bodyParser.urlencoded({ extended: false}))
router.use(passport.initialize())
router.use(passport.session())


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

router.get('/google', 
    passport.authenticate('google', {
        scope: [ 'profile', 'email',
                //'https://www.googleapis.com/auth/plus.login'
            //'https://www.googleapis.com/auth/userinfo.profile', 
            //'https://www.googleapis.com/auth/userinfo.email'
        ] //'https://www.googleapis.com/auth/plus.profile.emails.read']
})    
)

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/loginfailure',
        //successRedirect: '/loginSuccess'
    }),
    function(req, res) {
        console.log('success')
    }
)





router.get('/', (req, res) => {
    res.send('default login page')
})

router.get('/loginSuccess', (req, res) => {
    res.send('login success')
})

router.get('/loginfailure', (req, res) => {
    res.send('login fail')
})

function authSuccess(req, res)  {
    //res.redirect('/')
    res.send('loginsuccess')
}

module.exports = router