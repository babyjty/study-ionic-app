
const express = require('express', '4.17.1')
const app = express()

const session = require('express-session')
const passportconfig = require('./routes/userRoutes/passport')
const port = 3000
const authconfig = require('./config/key')
const key = require('./config/key')
const passport = require('passport')
const routes = require('./routes')

// app.use(passport.initialize())

// app.use(session({
//     secret: 'randomtext',
//     saveUninitialized: false,
//     resave: false
// }))


app.use('', routes)
app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




app.use(require('./routes'))






