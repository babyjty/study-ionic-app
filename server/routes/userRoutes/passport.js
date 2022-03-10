const passport = require('passport')
const { User } = require('../../models/User')
const GoogleStrategy = require('passport-google-oauth20')
const config = require('../../config/key')
//const { userError } = require('@angular/compiler-cli/src/transformers/util')
const CALLBACK_URL = 'http://localhost:4200/api/google/google/callback'
const LocalStrategy = require('passport-local')//.Strategy
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { async } = require('rxjs')



passport.serializeUser((user, done) => {
    console.log('serialise entered')
    done(null, user.id)
    console.log('serialise complete')
})

passport.deserializeUser((id, done) => {
    console.log('deserialise entered')
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

// passport.use('google',
//     new GoogleStrategy({
//         callbackURL: CALLBACK_URL,
//         clientID: config.GOOGLE_CLIENTID,
//         clientSecret: config.GOOGLE_CLIENTSECRET,
//     },
//     (request, accessToken, refreshToken, profile, done) => {
//         User.findOne({ googleid: profile.id }).then((existingUser) => {
//             if (existingUser){
//                 done(null, existingUser)
//             } else {
//                 var newUser = new User()
//                 newUser.email = profile.email,
//                 newUser.firstname = profile.given_name,
//                 newUser.lastname = profile.family_name,
//                 newUser.provider = "google",
//                 newUser.googleid = profile.googleid
//                 newUser.save((err) => {
//                     if (err) {
//                         throw err
//                     } else {
//                         done(null, newUser)
//                     }
//                 })
//             }
//         })
//     }
//     )
// )   

// passport.use('google', 
//     new GoogleStrategy({
//         callbackURL: CALLBACK_URL,
//         clientID: config.GOOGLE_CLIENTID,
//         clientSecret: config.GOOGLE_CLIENTSECRET,
//         passReqToCallback: true,
//         userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//     }, async (request, accessToken, refreshToken, profile, done) => {
//             console.log(profile)
//             User.findOne({email: profile.emails[0].value }, (err, user) => {
//                 // if (err){
//                 //     console.log(err)
//                 //     //done(err)
//                 // }
//                 if (!user) {
//                     console.log('user not in db')
//                     const newUser = new User({
//                         email: profile.emails[0].value,
//                         firstname: profile.name.givenName,
//                         lastname: profile.name.familyName,
//                         googleid: profile.id,
//                         provider: 'google',
//                         //token: accessToken
//                     })
//                     newUser.save(error => {
//                         if (error) console.log(error);
//                         return done(error, newUser)
//                     })
                    
//                 } else {//user exists, just log in
//                     console.log('user already in db')
//                     return done(null, user)
//                 }
//                 done (null, user)
//         }) 
//     })
// )

passport.use('google',
    new GoogleStrategy({
        callbackURL: 'http://localhost:4200/login/google/callback',
        clientID: config.GOOGLE_CLIENTID,
        clientSecret: config.GOOGLE_CLIENTSECRET,
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['profile']
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        
        const newUser = {
            googleid: profile.id,
            firstname: 'google',
            lastname: 'google',
            provider: 'google',
            email: profile.emails[0].value
        }
        
        try {
            let user = await User.findOne({ googleid: profile.id })
            if (user){
                console.log('user exists')
                done(null, user)
            } else {
                console.log('user doesnt exist')
                user = await User.create(newUser)
                done(null, user)
            }
        } catch (err) {
            console('caught error')
            console.log(err)
        }
    })
)
    


passport.use('local-login', new LocalStrategy({
    email: 'email',
    password: 'password',
    passReqToCallback: true
    }, 
    async (email, password, done) => {
        console.log('within passport function')
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

