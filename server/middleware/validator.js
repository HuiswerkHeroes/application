const { body, validationResult } = require('express-validator');
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

const schoolValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Voer een schoolnaam in'),
        body('city')
            .not()
            .isEmpty()
            .withMessage('Voer een plaatsnaam in')
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
};

module.exports = {
    userValidationRules,
    loginValidationRules,
    schoolValidationRules,
    validate
};
