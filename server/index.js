
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


mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))


app.use(session({
    secret: 'studywithmeubitch',
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 23132213213412
    }
}))
app.use(cors());
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






