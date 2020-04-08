/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const express = require('express');
const router = express.Router();

// Middleware
const { validate } = require('../middleware/validate');
const { gebruikerValidationRegels } = require('../middleware/routeMiddleware/gebruikerValidator.js');

// Utils
const hashPassword = require('../utils/hashPassword');
const generateAuthToken = require('../utils/generateAuthToken');

// Models
const Gebruiker = require('../models/Gebruiker');
const Rol = require('../models/Rol');

/**
 *  @route   POST api/gebruiker
 *  @desc    Registreer een gebruiker
 *  @access  Public
 */
router.post('/', gebruikerValidationRegels(), validate, async (req, res) => {
    const { email, voornaam, achternaam, wachtwoord } = req.body;

    try {
        let gebruiker = await Gebruiker.findOne({ email });

        if (gebruiker) {
            return res.status(409).json({ msg: 'Er is al een gebruiker geregistreerd met het opgegeven e-mailadres!' });
        }

        const defaultRol = await Rol.findOne({naam: "gebruiker"});

        const wachtwoordHashed = await hashPassword(wachtwoord);

        gebruiker = await new Gebruiker({ voornaam, achternaam, email, wachtwoord: wachtwoordHashed, rol: defaultRol.id }).save();

        // Generate a Auth Token
        generateAuthToken(gebruiker.id)
            .then((token) => {
                res.json({ token });
            })
            .catch(() => {
                return res.status(500).json({ msg: 'Something went wrong on our side.' });
            });
    } catch (err) {
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
