import axios from 'axios'

// Access the environment variable with REACT_APP_ prefix
const baseURL = process.env.NEXT_PUBLIC_API_URL
if (!baseURL) {
  console.error('Environment variable is not defined')
}

axios.defaults.baseURL = baseURL

export default axios
