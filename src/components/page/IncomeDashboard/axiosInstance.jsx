import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    const roleIds = sessionStorage.getItem('roleIds');
    if (roleIds) {
        // Add roleIds as query parameter
        config.url = `${config.url}?roleIds=${roleIds}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
