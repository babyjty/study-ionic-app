const express = require('express', '4.17.1')
const app = express()
const cors = require('cors')
const authRoute = require('./routes/auth')
const session = require('express-session')
const passportconfig = require('./routes/userRoutes/passport')
<<<<<<< HEAD
const port = 4200
//const passportconfig = require('./routes/userRoutes/passport')
=======
const port = 3000
>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
const config = require('./config/key')
const routes = require('./routes')
const mongoose = require('mongoose')
const json  = require('express-json')
const bodyParser = require('body-parser')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require('passport')

var store = new MongoDBStore({
    uri: config.mongoURI,
    collection: 'mySessions',
    autoRemove: 'native'
})



mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
<<<<<<< HEAD

// app.use(passport.initialize())

// app.use(session({
//     secret: 'randomtext',
//     saveUninitialized: false,
//     resave: false
// }))

app.use('', routes)
=======


store.on('error', (err) => {
    console.log(err)
})



app.use(cors({origin: [
    "http://localhost:4200",
    "http://localhost:8100"
  ], credentials: true}));

app.use(session({
    secret: 'studywithmeubitch',
    saveUninitialized: true,
    resave: false,
    store: store,
    cookie: {
        secure: false
    }
}))
app.use(express.urlencoded({
    extended: true
}))
app.use(json())

app.use(passport.initialize())
app.use(passport.session())



app.use('/api', routes)
>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
<<<<<<< HEAD
=======




module.exports = app

//app.use(require('./routes/index2'))






>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
