import axios from './axios'

const sendContact = async (contactData: any) => {
  try {
    const response = await axios.post(`/contact`, contactData)

    if (response.status === 201) {
      throw new Error('Duplicate Entry')
    }

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return response.data
  } catch (error: any) {
    if (error.message === 'Duplicate Entry') {
      return Promise.reject(new Error('This entry already exists.'))
    }
    return Promise.reject(
      new Error('An error occurred while sending the message.')
    )
  }
}

export default sendContact
