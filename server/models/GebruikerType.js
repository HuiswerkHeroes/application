const mongoose = require('mongoose');

const GebruikerTypeSchema = mongoose.Schema({
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

module.exports = mongoose.model('GebruikerType', GebruikerTypeSchema, { collection: 'gebruiker_types' });
