const express = require('express');
const mainRouter = express.Router();
const mongoose = require('mongoose')
const config = require('../config/key')

mainRouter.use('/localauth', require('./userRoutes/localAuthController'))
mainRouter.use('/jio', require('./jioRoutes/jioController'))
mainRouter.use('/google', require('./userRoutes/googleController'))
mainRouter.use('/profile', require('./userRoutes/profileController'))


mainRouter.get('/test', (req, res) => {
    res.send('Test dumb')
})

module.exports = mainRouter;


