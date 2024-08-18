import axios from './axios'

const sendContact = async (contactData: any) => {
  try {
    const response = await axios.post(`/contact`, contactData)

    if (response.status === 500) {
      throw new Error('Failed with Server Code 500')
    }

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return response.data
  } catch (e: any) {
    // console.error('Error Sending Request:', e.response.data)
    throw e
  }
}

export default sendContact
