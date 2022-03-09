const express = require('express');
const mainRouter = express.Router();
const mongoose = require('mongoose')
const config = require('../config/key')

mainRouter.use('/api/user', require('./userRoutes/registerController'))
mainRouter.use('/api/jio', require('./jioRoutes/jioController'))
mainRouter.use('/api/auth', require('./userRoutes/authController'))


mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

mainRouter.get('/test', (req, res) => {
    res.send('Test dumb')
})

module.exports = mainRouter;