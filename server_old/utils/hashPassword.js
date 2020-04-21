/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

const bcrypt = require('bcryptjs');

/**
 *  @util   hashPassword
 *  @desc   Hash a provided password
 */

module.exports = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};
