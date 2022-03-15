const router = require('express').Router()
const passport = require('passport')
//const passportconfig = require('../passport')

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/login/failed', (req, res) => {
    res.status(400).json({
        success: false,
        message: "login failure"
    })
})

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'successful',
            user: req.user
        })
    }
})

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login/success')
})

router.get('/google/callback', passport.authenticate('google', {
    //successRedirect: '/login/success',
    failureRedirect: '/login/failed'
}))

module.exports = router;