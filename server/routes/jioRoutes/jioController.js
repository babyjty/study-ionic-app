const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Jio router")
})

router.get('/dog', (req, res) => {
    res.send('dog')
})

module.exports = router;