/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

// const mongoose = require('mongoose');

// Require Models
const Rol = require('../models/Rol');
const GebruikerType = require('../models/GebruikerType');

// require('fs')
//     .readdirSync('./models')
//     .forEach(function (file) {
//         require('../models/' + file);
//     });

/**
 *  @util   handleStartArguments
 *  @desc   Handle NodeJS Start Arguments
 */
const handleStartArguments = () => {
    process.argv.forEach(async function (val, index, array) {
        if (val === '--db-seed') {
            console.log('\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mStarting to seed the database');
            await seedDatabase();
        }
    });
};

const seedDatabase = async () => {
    const fs = require('fs');
    let rawdata = await JSON.parse(fs.readFileSync(__dirname + '/database/seeder.json'));
    rawdata.forEach((element) => {
        element.rijen.forEach((element) => {
            Rol.create(element, (err) => {
                console.error(err);
            });
        });
    });

    console.log('\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mSeeding completed, stopping application.');
    process.exit(1);
};

module.exports = handleStartArguments;
