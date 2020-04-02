const mongoose = require('mongoose');

const OpleidingSchema = mongoose.Schema({
    schoolLocatie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SchoolLocatie'
    },
    naam: {
        type: String,
        required: true
    },
    vakken: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vak'
        }
    ],
    actief: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Opleiding', OpleidingSchema, { collection: 'opleidingen' });
