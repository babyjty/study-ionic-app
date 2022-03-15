const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { doesNotMatch } = require('assert');
const passport = require('passport');
const config = require('./config/key')
const {User} = require('./models/User')
const mongoose = require('mongoose')

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENTID,
    clientSecret: config.GOOGLE_CLIENTSECRET,
    callbackURL: "http://localhost:4200/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    const user = User.findOne({email: profile.emails[0].value})
    if (!user) {
        console.log('user no exist')
        const newUser = new User({
            googleid: profile.id,
            firstname: profile.given_name,
            lastname: profile.family_name,
            provider: 'google'  
        }).save((err, newUSer) => {
            if (err){
                console.log('error while saving to db')
            }
            cb(null, newUser)
        })
    } else {
        console.log('user exist')
        cb(null, profile)
    }
  }
));

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})