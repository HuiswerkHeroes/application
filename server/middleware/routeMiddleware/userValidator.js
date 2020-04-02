const { body } = require('express-validator');

const userValidationRules = () => {
    return [
        body('firstName')
            .not()
            .isEmpty()
            .withMessage('Voornaam is niet ingevuld'),
        body('lastName')
            .not()
            .isEmpty()
            .withMessage('Achternaam is niet ingevuld'),
        body('email')
            .isEmail()
            .withMessage('Voer een geldig e-mailadres in'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Het wachtwoord moet minimaal 6 karakters bevatten')
    ];
};

const setupTypeValidationRules = () => {
    return body('type').isIn(['Student', 'Docent', 'HBVB']);
};

const setupSchoolValidationRules = () => {
    return body('schoolId')
        .not()
        .isEmpty();
};

module.exports = {
    userValidationRules,
    setupTypeValidationRules,
    setupSchoolValidationRules
};
