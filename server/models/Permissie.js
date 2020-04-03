/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const PermissieSchema = mongoose.Schema({
    naam: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    actief: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Permissie', PermissieSchema, { collection: 'permissies' });
