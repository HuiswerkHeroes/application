/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const GebruikerTypeSchema = mongoose.Schema({
    naam: {
        type: String,
        required: true,
        unique: true,
    },
    actief: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = mongoose.model('GebruikerType', GebruikerTypeSchema, 'gebruiker_types');
