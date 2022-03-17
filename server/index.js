
const express = require('express', '4.17.1')
const app = express()
const cors = require('cors')
const authRoute = require('./routes/auth')
const session = require('express-session')
const passportconfig = require('./routes/userRoutes/passport')
const port = 3000
//const passportconfig = require('./routes/userRoutes/passport')
const config = require('./config/key')
const key = require('./config/key')
const passport = require('passport')
const routes = require('./routes')
const mongoose = require('mongoose')

app.use(cors());

mongoose.connect(
    config.mongoURI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
// app.use(passport.initialize())

// app.use(session({
//     secret: 'randomtext',
//     saveUninitialized: false,
//     resave: false
// }))


app.use('/api', routes)
app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




//app.use(require('./routes/index2'))






