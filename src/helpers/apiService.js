import axios from 'axios'
import { BASE_URL } from '@/config'
import { LOGOUT } from '@/store/actions/types'
import store from '@/store'

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

client.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      ...config.headers,
      ...store.getters.headers
    }
  }),
  error => error
)

client.interceptors.response.use(
  response => (response && response.data ? response.data : response) || {},
  error => {
    const status = error.response ? error.response.status : 408

    if (status === 401) {
      store.dispatch(LOGOUT)
    }

    console.warn('interceptors error', status, error.response, error)
    return Promise.reject(error)
  }
)

const apiService = {
  client,

  login({ login, password }) {
    return this.client.post('/api/signin/', { email: login, password })
  },
  register({ name, surname, password, email }) {
    return this.client.post('/api/signup/', { name, surname, password, email })
  },
  fetchProfile() {
    return this.client.get('/api/me')
  }
}

export default apiService
