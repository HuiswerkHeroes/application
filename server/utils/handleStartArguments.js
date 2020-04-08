/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */
const fs = require('fs')

/**
 *  @func   handleStartArguments (exports)
 *  @desc   Handle NodeJS Start Arguments
 */
const handleStartArguments = () => {
    process.argv.forEach(async function (val, index, array) {
        if (val === '--db-seed') {
            await seedDatabase();
        }
    });
};

/**
 *  @func   seedDatabase
 *  @desc   Seed de database
 */
const seedDatabase = async () => {
    const rawSeedData = JSON.parse(fs.readFileSync(__dirname +  '/database/seeder.json'))
    console.log('\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mStarting to seed the database');

    // Voor elke collection
    rawSeedData.forEach((element) => {
        const Model = require('../models/' + element.modelNaam);
        console.log(`\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mSeeding model: ${element.modelNaam}`);

        // Voor elke rij
        element.rijen.forEach(async (element) => {
            await Model.findOneAndUpdate(element, element, {upsert: true, new: true, runValidators: true, useFindAndModify: false}).catch((err) => {
                console.error(err)
            }); 	
        })

        console.log(`\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mSeeding model: ${element.modelNaam} - Finished`);
    })

    console.log('\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Database Seeder] \x1b[0mSeeding completed, stopping application.');
    process.exit(1);
}

module.exports = handleStartArguments;
