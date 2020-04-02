const { body } = require('express-validator');

const loginValidationRules = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Voer een geldig e-mailadres in'),
        body('password')
            .not()
            .isEmpty()
            .withMessage('Voer een wachtwoord in')
    ];
};

module.exports = {
    loginValidationRules
};
