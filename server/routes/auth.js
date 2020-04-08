/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Middleware
const isAuthenticated = require('../middleware/isAuthenticated');
const { validate } = require('../middleware/validate');
const { inloggenValidationRegels } = require('../middleware/routeMiddleware/authValidator.js');

// Models
const Gebruiker = require('../models/Gebruiker');

// Utils
const generateAuthToken = require('../utils/generateAuthToken');

/**
 *  @route   GET api/auth
 *  @desc    Vraag de gegevens op van de ingelogde gebruiker
 *  @access  Private
 */
router.get('/', isAuthenticated, async (req, res) => {
    try {
        const gebruiker = await Gebruiker.findById(req.gebruiker.id).select('-password');

        return res.json(gebruiker);
    } catch (err) {
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

/**
 *  @route   POST api/auth
 *  @desc    Genereer een JWT op basis van inloggegevens
 *  @access  Public
 */
router.post('/', inloggenValidationRegels(), validate, async (req, res) => {
    const { email, wachtwoord } = req.body;

    try {
        const gebruiker = await Gebruiker.findOne({ email });

        // Als er geen gebruiker is
        if (!gebruiker) {
            return res.status(400).json({ msg: 'E-mailadres komt niet overeen met het wachtwoord' });
        }

        const isMatch = await bcrypt.compare(wachtwoord, gebruiker.wachtwoord);

        if (!isMatch) {
            return res.status(400).json({ msg: 'E-mailadres komt niet overeen met het wachtwoord' });
        }

        // Genereer een JWT token
        generateAuthToken(gebruiker.id)
            .then((token) => {
                res.json({ token });
            })
            .catch(() => {
                return res.status(500).json({ msg: 'Something went wrong on our side.' });
            });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/auth] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
