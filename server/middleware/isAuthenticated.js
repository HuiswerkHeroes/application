/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get the token from the header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);

        req.gebruiker = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Invalid token, not authorized' });
    }
};
