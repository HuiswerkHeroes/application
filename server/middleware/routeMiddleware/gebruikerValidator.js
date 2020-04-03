/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const { body } = require('express-validator');

const gebruikerValidationRegels = () => {
    return [
        body('voornaam')
            .not()
            .isEmpty()
            .withMessage('Voornaam is niet ingevuld'),
        body('achternaam')
            .not()
            .isEmpty()
            .withMessage('Achternaam is niet ingevuld'),
        body('email')
            .isEmail()
            .withMessage('Voer een geldig e-mailadres in'),
        body('wachtwoord')
            .isLength({ min: 6 })
            .withMessage('Het wachtwoord moet minimaal 6 karakters bevatten')
    ];
};

module.exports = {
    gebruikerValidationRegels
};
