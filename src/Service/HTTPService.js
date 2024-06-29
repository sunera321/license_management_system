import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://licensemanagementsystemseverside20240316184109.azurewebsites.net/',
  baseURL: 'https://localhost:7295/',
  timeout: 500000, // Adjusted to 50 seconds
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response !== undefined && error.response.status === 402) {
      console.log('error' + error)
      window.location = '/'
    } else {
      let msg = 'Cannot find the Server'
      if (
        error.response.data !== undefined &&
        error.response.data.message !== undefined
      ) {
        msg = error.response.data.message
        return Promise.reject(msg)
      }
    }
    return Promise.reject(error)
  }
)

export default instance
