const mongoose = require('mongoose');

const SchoolCourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    vakken: {
        type: Array,
        required: false
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = mongoose.model('SchoolCourse', SchoolCourseSchema);
