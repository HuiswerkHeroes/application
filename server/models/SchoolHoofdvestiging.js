/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const SchoolHoofdvestigingSchema = mongoose.Schema({
    BRIN: {
        type: String,
        required: true,
        uppercase: true,
        unique: true,
        max: 4
    },
    gemeente: {
        type: String,
        required: true,
        uppercase: true
    },
    naam: {
        type: String,
        required: true
    },
    actief: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('SchoolHoofdvestiging', SchoolHoofdvestigingSchema, { collection: 'school_hoofdvestigingen' });
