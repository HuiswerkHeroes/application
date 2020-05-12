/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import axios from 'axios'

const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken
