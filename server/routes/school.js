const express = require('express');
const router = express.Router();

// Middleware
const auth = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { schoolValidationRules, schoolOpleidingValidationRules } = require('../middleware/routeMiddleware/schoolValidator.js');

// Models
const School = require('../models/School');
const SchoolOpleiding = require('../models/SchoolCourse');

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

// @route   POST api/school
// @desc    Create a new School Location
// @access  TODO: Private Permission Based
router.post('/', auth, schoolValidationRules(), validate, async (req, res) => {
    const { name, city } = req.body;

    try {
        let school = School.findOne({ name });
        console.log(school);
        // if (school) {
        //     return res.status(409).json({ msg: 'School met die naam bestaat al' });
        // }

        school = await new School({ name, city }).save();
        res.json({ msg: 'success' });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/school] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

// @route   POST api/school/opleiding
// @desc    Create a new opleiding based on a school
// @access  TODO: Private Permission Based
router.post('/opleiding', auth, schoolOpleidingValidationRules(), validate, async (req, res) => {
    const { name, schoolId } = req.body;

    try {
        const school = School.findById(schoolId);

        if (!school) {
            return res.status(404).json({ msg: 'School niet gevonden' });
        }

        const opleiding = await new SchoolOpleiding({ name, school: schoolId }).save();
        res.json({ msg: 'success' });
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[Route: POST - api/school] \x1b[31m${err.message}\x1b[0m`);
        return res.status(500).json({ msg: 'Something went wrong on our side.' });
    }
});

module.exports = router;
