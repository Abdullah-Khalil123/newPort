import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL
if (!baseURL) {
  console.error('Environment variable is not defined')
}

axios.defaults.baseURL = baseURL

export default axios
