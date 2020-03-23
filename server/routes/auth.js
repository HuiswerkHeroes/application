const express = require('express');
const router = express.Router();

// Middleware
const auth = require('../middleware/auth');

// Models
const User = require('../models/User');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user);
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: GET - api/auth] \x1b[31m${err.message}\x1b[0m`);
        res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('Auth user & get token');
});

module.exports = router;
