const express = require('express', '4.17.1')
const app = express()

const session = require('express-session')
const passportconfig = require('./routes/userRoutes/passport')
const port = 4200
const authconfig = require('./config/key')
const key = require('./config/key')
const passport = require('passport')

// app.use(passport.initialize())

// app.use(session({
//     secret: 'randomtext',
//     saveUninitialized: false,
//     resave: false
// }))

app.use(require("./routes"));

app.get('/login', 
    passportconfig.authenticate('google', {
        scope: ['profile', 'email'] //'https://www.googleapis.com/auth/plus.profile.emails.read']
})    
)

app.get('/login/google/callback',
    passportconfig.authenticate('google', {failureRedirect: '/', }),
    (req, res) => {
        console.log('success')
    }
)

app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
