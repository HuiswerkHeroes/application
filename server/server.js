const express = require('express');
const connectDB = require('./db');

const app = express();

// Initialize dotenv
require('dotenv').config();

// Connect to database
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welkom bij de Huiswerk Heroes API' }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[Server] \x1b[0mStarted on port: ${PORT}`));
