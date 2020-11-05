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
  },

  // cards and bank accounts
  fetchCards() {
    return this.client.get('/api/cards')
  },
  addCard(params) {
    return this.client.post('/api/cards/add', params)
  },
  fetchBankAccounts() {
    return this.client.get('/api/bank-accounts')
  },
  addBankAccount(params) {
    return this.client.post('/api/bank-accounts/add', params)
  },

  // activity
  fetchActivity() {
    return this.client.get('/api/recent-activity')
  },

  // contacts
  fetchContacts() {
    return this.client.get('/api/contacts')
  },
  fetchUsers() {
    return this.client.get('/api/users')
  },
  addContact(id) {
    return this.client.post('/api/contacts/add', { id })
  }
}

export default apiService
