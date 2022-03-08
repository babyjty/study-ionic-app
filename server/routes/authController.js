const express = require('express')
const router = express.Router()
const passport = require('./passport')

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

router.get('/google', 
    passport.authenticate('google', {scope: ['profile']})    
)

router.get('/google/callback',
    passport.authenticate('google'), authSuccess
)

function authSuccess(req, res)  {
    res.redirect('/')
}

module.exports = router