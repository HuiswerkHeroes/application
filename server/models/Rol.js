/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    naam: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    weergaveNaam: {
        type: String,
        required: true
    },
    actief: {
        type: Boolean,
        required: true,
        default: true
    },
    permissies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permissie'
        }
    ]
});

module.exports = mongoose.model('Rol', RolSchema, { collection: 'rollen' });
