/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        localStorage.clear('token');
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;
