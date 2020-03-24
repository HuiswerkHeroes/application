import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        localStorage.setItem('token', null);
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;
