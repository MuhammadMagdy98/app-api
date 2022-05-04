const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8,
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true
    },
    mobile: {
        type: String,
        required: [true, 'Please enter a mobile number'],

    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please enter a birthdate'],
    },
    dateOfPregenance: {
        type: Date,
        required: [true, 'Please enter date of pregenance'],
    }
});

const users = mongoose.model('pregenance-users', userSchema);

module.exports = users;