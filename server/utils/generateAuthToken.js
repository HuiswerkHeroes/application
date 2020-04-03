const jwt = require('jsonwebtoken');

/**
 *  @util   generateAuthToken
 *  @desc   Hash a provided password
 */

module.exports = userId => {
    return new Promise((resolve, reject) => {
        try {
            const payload = {
                user: {
                    id: userId
                }
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                {
                    expiresIn: 86400
                },
                (err, token) => {
                    if (err) throw err;
                    resolve(token);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};
