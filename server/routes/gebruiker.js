const express = require('express');
const router = express.Router();

// Middleware
const auth = require('../middleware/isAuthenticated');
const { validate } = require('../middleware/validate');
const { gebruikerValidationRegels } = require('../middleware/routeMiddleware/gebruikerValidator.js');

// Utils
const hashPassword = require('../utils/hashPassword');
const generateAuthToken = require('../utils/generateAuthToken');

// Models
const Gebruiker = require('../models/Gebruiker');

/**
 *  @route   POST api/gebruiker
 *  @desc    Registreer een gebruiker
 *  @access  Public
 *  NOTE: Moet nog iets doen met gebruikerType & rol deze route werkt nog niet
 */

router.post('/', gebruikerValidationRegels(), validate, async (req, res) => {
    const { email, voornaam, achternaam } = req.body;

    try {
        let gebruiker = await Gebruiker.findOne({ email });

        if (gebruiker) {
            return res.status(409).json({ msg: 'Er is al een gebruiker geregistreerd met het opgegeven e-mailadres!' });
        }

        gebruiker = new User({ firstName, lastName, email, hashPassword(password) }).save();

        // Generate a Auth Token
        generateAuthToken(gebruiker.id).then((token) => {
            res.json({ token });
        }).catch(() => {
            return res.status(500).json({ msg: 'Something went wrong on our side.' });
        });

    } catch (err) {
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});
