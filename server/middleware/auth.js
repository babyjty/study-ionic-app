const { User } = require("../models/User")

let auth = (req, res, next) => {
    //where authentication takes place
    //get token from client
    let token = req.cookies.x_auth

    //decrypt token and find the corresponding user
    User.findByToken(token, (err, user) => {
        if (err) throw err
        if (!user) return res.json({
            isAuth: false,
            error: true
        })

        req.token = token //the reason why we put token and user in request is to use them in the app.get
        req.user = user
        next()  //if there is no next it will be stuck in the middleware
    })
    //if user exists authenticate

    //if no user dont authenticate
}







module.exports = { auth }