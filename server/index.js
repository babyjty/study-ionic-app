
const express = require('express', '4.17.1')
const app = express()
const cors = require('cors')
const authRoute = require('./routes/auth')
const session = require('express-session')
//const passportconfig = require('./routes/userRoutes/passport')
const port = 4200
const authconfig = require('./config/key')
const key = require('./config/key')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key')
const passportsetup = require('./passport')
//require('https').globalAgent.options.rejectUnauthorized = false

mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
// app.use(passport.initialize())

app.use(session({
    secret: 'randomtext',
    saveUninitialized: false,
    resave: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}) )

app.use('/auth', authRoute)

app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




//app.use(require('./routes/index2'))






