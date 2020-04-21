/*
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

const express = require('express');
const router = express.Router();

// Middleware
const isAuthenticated = require('../../middleware/isAuthenticated');

// Models
const GebruikerType = require('../../models/GebruikerType')

/**
 *  @route   GET api/auth
 *  @desc    Vraag de gegevens op van de ingelogde gebruiker
 *  @access  Private
 */
router.get('/types', isAuthenticated, async (req, res) => {
    try {
        return res.json(await GebruikerType.find({ actief: {$ne: false} }));
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
})

module.exports = router;