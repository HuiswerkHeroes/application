/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const express = require('express');
const connectDB = require('./db');
const handleStartArguments = require('./utils/handleStartArguments');
const cors = require('cors');

const app = express();

// Init stuff
app.use(express.json({ extended: false }));
app.use(cors({ origin: 'http://localhost:8080' }));

// Initialize dotenv
require('dotenv').config();

app.get('/', (req, res) => res.json({ msg: 'Welkom bij de Huiswerk Heroes API' }));

// Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/user', require('./routes/user'));
// app.use('/api/school', require('./routes/school'));

const PORT = process.env.PORT || 5000;

// Connect to database then handle arguments and then listen the app
(async () => {
    await connectDB();
    await handleStartArguments();
    app.listen(PORT, console.log(`\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Server] \x1b[0mStarted on port: ${PORT}`));
})();
