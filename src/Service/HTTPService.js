import axios from 'axios';

// Create an axios instance with base configuration
const instance = axios.create({
  //baseURL: 'https://licensemanagementsystemseverside20240316184109.azurewebsites.net/',
  baseURL: 'https://localhost:7295/',
  timeout: 500000, // Adjusted to 50 seconds
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// Request interceptor to add roleIds from session storage to the URL
instance.interceptors.request.use(
  (config) => {
    const roleIds = sessionStorage.getItem('roleIds');
    if (roleIds) {
      // Construct URL with roleIds as a query parameter
      const url = new URL(config.url, config.baseURL);
      url.searchParams.append('roleIds', roleIds);
      config.url = url.pathname + url.search;

      // Log the constructed URL
      console.log('Constructed URL:', config.url);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response !== undefined && error.response.status === 402) {
      console.log('error' + error);
      window.location = '/';
    } else {
      let msg = 'Cannot find the Server';
      if (error.response.data !== undefined && error.response.data.message !== undefined) {
        msg = error.response.data.message;
        return Promise.reject(msg);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
