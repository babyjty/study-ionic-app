
const express = require('express', '4.17.1')
const app = express()
const cors = require('cors')
const authRoute = require('./routes/auth')
const session = require('express-session')
const passportconfig = require('./routes/userRoutes/passport')
const port = 3000
const config = require('./config/key')
const routes = require('./routes')
const mongoose = require('mongoose')
const json  = require('express-json')
const bodyParser = require('body-parser')
const MongoDBStore = require('connect-mongodb-session')(session)

var store = new MongoDBStore({
    uri: config.mongoURI,
    collection: 'mySessions',
    autoRemove: 'native'
})



mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))


store.on('error', (err) => {
    console.log(err)
})



app.use(cors());

app.use(session({
    secret: 'studywithmeubitch',
    saveUninitialized: true,
    resave: false,
    store: store
}))
app.use(express.urlencoded({
    extended: true
}))
app.use(json())



app.use('/api', routes)
app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app

//app.use(require('./routes/index2'))






