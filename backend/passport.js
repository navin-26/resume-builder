// backend/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User');

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
        // Check if user already exists in our db
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            // Already have this user
            return done(null, existingUser);
        }
        // If not, create a new user in our db
        const newUser = await new User({
            googleId: profile.id,
            name: {
                givenName: profile.name.givenName,
                familyName: profile.name.familyName,
            },
            email: profile.emails[0].value
        }).save();
        done(null, newUser);
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});
