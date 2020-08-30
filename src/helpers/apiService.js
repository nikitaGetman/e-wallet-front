import axios from 'axios'
import { BASE_URL } from '@/config'

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

const apiService = {
  client,
  login() {
    return Promise.resolve({ key: 'some key' })
  }
}

export default apiService
