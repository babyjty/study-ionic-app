const { User } = require("../models/User")

const auth = (req, res, next) => {
    if (req.session.user){
        next()
    } else {
        res.status(400).json({
            authSuccess: false,
            message: "user not logged in"
        })
    }
}


module.exports = { auth }