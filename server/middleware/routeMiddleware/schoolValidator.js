const { body } = require('express-validator');

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

const schoolOpleidingValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Voer een schoolnaam in'),
        body('schoolId')
            .not()
            .isEmpty()
            .withMessage('Selecteer een school')
    ];
};

module.exports = {
    schoolValidationRules,
    schoolOpleidingValidationRules
};
