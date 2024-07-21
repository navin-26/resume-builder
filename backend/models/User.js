// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    name: {
        givenName: String,
        familyName: String,
    },
    email: { type: String, required: true, unique: true },
    // Add any other fields you want to store
});

const User = mongoose.model('User', userSchema);

module.exports = User;
