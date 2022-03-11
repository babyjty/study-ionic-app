const config = require('../config/key')

const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;



passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENTID,
    clientSecret: config.GOOGLE_CLIENTSECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
))

passport.serializeUser((user, done) => {
    done(null, user)
})