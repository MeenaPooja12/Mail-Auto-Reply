const passport = require('passport');

const  GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '145162731699-b6658e30h0t7mvo3kjtj7ogp8aa2dk6b.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET ='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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
   
    return done(null, profile);
    
  }
));

passport.serializeUser(function(user, done){
    done(null,user);
});

passport.deserializeUser(function(user, done){
    done(null,user);
});