const express = require('express', '4.17.1')
const app = express()
const session = require('express-session')
const passport = require('passport')
const port = 4200

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(require('./routes'))






