const passport = require('passport')
const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('../config/key')
const { userError } = require('@angular/compiler-cli/src/transformers/util')
const CALLBACK_URL = 'http://localhost:3000/google/callback'
const user = new User()
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

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

passport.use('local-signup', new LocalStrategy(
    async (email, password, done) => {
        User.findOne({email: email}, (err, user) => {
            if (err){
                return done(err)
            }
            if (!user) {
                done(null, user)
            } 
            var pass_retrieved = user.password
            bcrypt.compare(password, pass_retrieved, (err, correct) => {
                if (err){
                    return done(null, false)
                } 
                if (correct){
                    done(null, user)
                }
            })
        })
    }
)
)

module.exports = passport

