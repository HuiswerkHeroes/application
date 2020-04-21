/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const { body } = require('express-validator');

const inloggenValidationRegels = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Voer een geldig e-mailadres in'),
        body('wachtwoord')
            .not()
            .isEmpty()
            .withMessage('Voer een wachtwoord in')
    ];
};

module.exports = {
    inloggenValidationRegels
};
