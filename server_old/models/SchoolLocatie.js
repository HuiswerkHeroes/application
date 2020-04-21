/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const SchoolLocatieSchema = mongoose.Schema({
    vestigingsnummer: {
        type: String,
        required: true,
        uppercase: true,
        unique: true,
        max: 6,
    },
    hoofdvestiging: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'SchoolHoofdvestiging',
    },
    naam: {
        type: String,
        required: true,
    },
    plaatsnaam: {
        type: String,
        required: true,
        uppercase: true,
    },
    adres: {
        type: String,
        required: true,
        uppercase: true,
    },
    actief: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = mongoose.model('SchoolLocatie', SchoolLocatieSchema, 'school_locaties');