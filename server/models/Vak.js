const mongoose = require('mongoose');

const VakSchema = mongoose.Schema({
    naam: {
        type: String,
        required: true,
        unique: true
    },
    actief: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Vak', VakSchema, { collection: 'vakken' });
