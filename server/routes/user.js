const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Middleware
const { validate } = require('../middleware/validate');
const { userValidationRules, setupTypeValidationRules, setupSchoolValidationRules } = require('../middleware/routeMiddleware/userValidator.js');
const auth = require('../middleware/auth');

// Models
const User = require('../models/Gebruiker');
const School = require('../models/School');

// @route   POST api/user
// @desc    Register a user
// @access  Public
router.post('/', userValidationRules(), validate, async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({ msg: 'Er is al een gebruiker geregistreerd met het opgegeven e-mailadres!' });
        }

        user = new User({ firstName, lastName, email, password });

        const salt = await bcrypt.genSalt();

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.jwtSecret,
            {
                expiresIn: 86400
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/user] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

// @route   POST api/user/setup/type
// @desc    Sets the User Type
// @access  Private
router.post('/setup/type', auth, setupTypeValidationRules(), validate, async (req, res) => {
    const { type } = req.body;
    try {
        let user = await User.findById(req.user.id);

        if (user.setupComplete === true) {
            return res.status(403).json({ msg: 'Registreren is al voltooid' });
        }

        user = await User.updateOne({ _id: req.user.id }, { accountType: type }, { runValidators: true });

        return res.json({ msg: 'Success' });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/user/setup/type] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

// @route   POST api/user/setup/school
// @desc    Sets the User School
// @access  Private
router.post('/setup/school', auth, setupSchoolValidationRules(), validate, async (req, res) => {
    const { schoolId } = req.body;
    try {
        let user = await User.findById(req.user.id);

        if (user.setupComplete === true) {
            return res.status(403).json({ msg: 'Registreren is al voltooid' });
        }

        const school = await School.findById(schoolId);

        if (!school) {
            return res.status(404).json({ msg: 'Invalid School Provided' });
        }

        user = await User.updateOne({ _id: req.user.id }, { school: schoolId, setupComplete: true }, { runValidators: true });

        return res.json({ msg: 'Success' });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/user/setup/school] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
