/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Middleware
// const auth = require('../middleware/auth');
// const { validate } = require('../middleware/validate');
// const { loginValidationRules } = require('../middleware/routeMiddleware/authValidator.js');

// // Models
// const User = require('../models/User');

// // @route   GET api/auth
// // @desc    Get logged in user
// // @access  Private
// router.get('/', auth, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password');

//         return res.json(user);
//     } catch (err) {
//         console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: GET - api/auth] \x1b[31m${err.message}\x1b[0m`);
//         return res.status(500).json({ msg: 'Something went wrong on our side.' });
//     }
// });

// // @route   POST api/auth
// // @desc    Auth user & get token
// // @access  Public
// router.post('/', loginValidationRules(), validate, async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ msg: 'E-mailadres komt niet overeen met het wachtwoord' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: 'E-mailadres komt niet overeen met het wachtwoord' });
//         }

//         const payload = {
//             user: {
//                 id: user.id
//             }
//         };

//         jwt.sign(
//             payload,
//             process.env.jwtSecret,
//             {
//                 expiresIn: 86400
//             },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token });
//             }
//         );
//     } catch (err) {
//         console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/auth] \x1b[31m${err.message}\x1b[0m`);
//         return res.status(500).json({ msg: 'Something went wrong on our side.' });
//     }
// });

// module.exports = router;
