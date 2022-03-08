const express = require('express');
const router = express.Router();

router.use('/user', require('./userController'))
//router.use('/jio', require('./jioController'))


router.get('/test', (req, res) => {
    res.send('Test route')
})

module.exports = router;