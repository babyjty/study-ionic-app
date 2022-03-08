const express = require('express')
const router = express.Router()
const passport = require('passport')
const session = require('express-session')

router.use(session({secret: "MySecret", resave: false, 
        saveUninitialized: true}))

router.use(passport.initialize())
router.use(passport.session())

