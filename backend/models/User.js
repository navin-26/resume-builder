const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    id: Number, 
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: String },
    city: { type: String },
    state: { type: String },
    education: [{
        institute: { type: String },
        degree: { type: String },
        specialization: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        percentage: { type: String }
    }],
    experience: [{
        companyName: { type: String },
        position: { type: String },
        startDate: { type: String },
        endDate: { type: String }
    }],
    skills: { type: [String] },
    projects: [{
        projectTitle: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        description: { type: String }
    }],
    summary: { type: String },
    textColor: { type: String },
    fontStyle: { type: String }
});

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    name: {
        givenName: String,
        familyName: String,
    },
    email: { type: String, required: true, unique: true },
    templates: {
        type: [templateSchema],
        default: ({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            education: [{ institute: '', degree: '', specialization: '', startDate: '', endDate: '', percentage: '' }],
            experience: [{ companyName: '', position: '', startDate: '', endDate: '' }],
            skills: [],
            projects: [{ projectTitle: '', startDate: '', endDate: '', description: '' }],
            summary: '',
            textColor: 'black',
            fontStyle: 'Arial'
        })
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
