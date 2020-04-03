const bcrypt = require('bcryptjs');

/**
 *  @util   hashPassword
 *  @desc   Hash a provided password
 */

module.exports = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};
