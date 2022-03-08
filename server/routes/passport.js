const passport = require('passport')
const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('../config/key')
const { userError } = require('@angular/compiler-cli/src/transformers/util')
const CALLBACK_URL = 'http://localhost:3000/google/callback'
const user = new User()

passport.use(
    new GoogleStrategy({
        callbackURL: CALLBACK_URL,
        clientID: config.GOOGLE_CLIENTID,
        clientSecret: config.GOOGLE_CLIENTSECRET
    },
    async (request, accessToken, refreshToken, profile, done) => {
        console.log("user profile is: ", profile)
        User.findOne({email: profile.email}, (err, user) => {
            if (user) {
                done(null, user)
            } else {
                //firstname, lastname, password, email
                user.email = profile.email,
                user.firstname = profile.given_name,
                user.lastname = profile.family_name,
                user.provider = "google",
                user.password = "00000000000",
                user.save((err) => {
                    if (err) {
                        throw err
                    } else {
                        done(null, user)
                    }
                })
            }
        })
    }
    )
)

module.exports = passport

