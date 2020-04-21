const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = mongoose.model('school', SchoolSchema);
