const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Gast'],
        required: true,
        default: 'Gast'
    },
    accountType: {
        type: String,
        enum: ['Onbekend', 'Student', 'Docent', 'HBVB'],
        default: 'Onbekend',
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    setupComplete: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);
