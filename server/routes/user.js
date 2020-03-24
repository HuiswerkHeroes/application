const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Middleware
const { userValidationRules, validate } = require('../middleware/validator.js');

// Models
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', userValidationRules(), validate, async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(422).json({ msg: 'User already exists' });
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
        res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
