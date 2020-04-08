/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const mongoose = require('mongoose');

const GebruikerSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        voornaam: {
            type: String,
            required: true,
        },
        achternaam: {
            type: String,
            required: true,
        },
        wachtwoord: {
            type: String,
            required: true,
        },
        setupAfgerond: {
            type: Boolean,
            required: true,
            default: false,
        },
        gebruikerType: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'GebruikerType',
        },
        rol: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Rol',
        },
        opleiding: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Opleiding',
        },
        vakken: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vak',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Gebruiker', GebruikerSchema, 'gebruikers');
