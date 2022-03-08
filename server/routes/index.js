const express = require('express');
const router = express.Router();

router.use('/api/user', require('./userController'))
router.use('/api/jio', require('./jioController'))


router.get('/test', (req, res) => {
    res.send('Test route')
})

module.exports = router;