const passport = require('passport')
const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('../config/key')
const { userError } = require('@angular/compiler-cli/src/transformers/util')
const CALLBACK_URL = 'http://localhost:3000/google/callback'
const user = new User()


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(
    new GoogleStrategy({
        callbackURL: CALLBACK_URL,
        clientID: config.GOOGLE_CLIENTID,
        clientSecret: config.GOOGLE_CLIENTSECRET
    },
    async (request, accessToken, refreshToken, profile, done) => {
        console.log("user profile is: ", profile)
        User.findOne({googleid: profile.googleid}, (err, user) => {
            if (user) {
                done(null, user)
            } else {
                //firstname, lastname, password, email
                user.email = profile.email,
                user.firstname = profile.given_name,
                user.lastname = profile.family_name,
                user.provider = "google",
                user.googleid = profile.googleid
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

passport.use('local-signup', new LocalStrate
)

module.exports = passport
