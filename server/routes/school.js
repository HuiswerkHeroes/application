const express = require('express');
const router = express.Router();

// Middleware
const { schoolValidationRules, validate } = require('../middleware/validator.js');

// Models
const School = require('../models/School');

// Utils
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// @route   GET api/school
// @desc    Get Schools
// @access  Public
router.get('/', async (req, res) => {
    const { q } = req.query;
    let schools;
    try {
        if (q) {
            const name = await escapeRegExp(q);
            schools = await School.find({ name: { $regex: '.*' + name + '.*', $options: 'i' } });
        } else {
            schools = await School.find();
        }

        res.json(schools);
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: GET - api/school] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

// @route   POST api/location
// @desc    Create a new School Location
// @access  TODO: Private Permission Based
router.post('/', schoolValidationRules(), validate, async (req, res) => {
    const { name, city } = req.body;

    try {
        let school = School.findOne({ name });

        if (school) {
            return res.status(409).json({ msg: 'School met die naam bestaat al' });
        }

        school = await new School({ name, city }).save();
        res.json({ msg: 'success' });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/school] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
