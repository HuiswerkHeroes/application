const mongoose = require('mongoose');

const PermissieSchema = mongoose.Schema({
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

module.exports = mongoose.model('Permissie', PermissieSchema, { collection: 'permissies' });
