const { User } = require("../models/User")

const auth = (req, res, next) => {
    console.log('within auth')
    if (req.session.user){
        console.log(req.session.user)
        next()
    } else {
        console.log(req.session.user)
        res.status(400).json({
            authSuccess: false,
            message: "user not logged in"
        })
    }
}


module.exports = { auth }