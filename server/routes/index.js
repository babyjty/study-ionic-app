const express = require('express');
const mainRouter = express.Router();
const mongoose = require('mongoose')
const config = require('../config/key')

mainRouter.use('/api/localauth', require('./userRoutes/localAuthController'))
mainRouter.use('/api/jio', require('./jioRoutes/jioController'))
mainRouter.use('/api/google', require('./userRoutes/googleController'))


mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

mainRouter.get('/test', (req, res) => {
    res.send('Test dumb')
})

module.exports = mainRouter;