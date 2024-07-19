const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const user = require('./models/user');

const app = express(); 

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const testRoute = require('./routes/testRoute');

app.use('/api', testRoute);



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());



// Configure Passport
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (user) {
      return done(null, user);
    } else {
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      });
      newUser.save((err) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard'); // Redirect to your dashboard or desired route
  });

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hello ${req.user.displayName}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
