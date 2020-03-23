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

        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ msg: 'Invalid token, not authorized' });
    }
};
