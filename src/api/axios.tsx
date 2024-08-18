import axios from 'axios'

// Access the environment variable with REACT_APP_ prefix
const baseURL = process.env.API_BASE_URI
if (!baseURL) {
  console.error('Environment variable REACT_APP_API_BASE_URI is not defined')
}

axios.defaults.baseURL = baseURL

export default axios
