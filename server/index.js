const express = require('express', '4.17.1')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(require('./routes'))






