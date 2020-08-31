import axios from 'axios'
import { BASE_URL } from '@/config'

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

client.interceptors.response.use(
  response => (response && response.data ? response.data : response) || {},
  error => {
    // Do something with response error

    // const status = error.response ? error.response.status : 408
    // const { baseURL = '', url = '' } = error.config
    // const urlPath = url.replace(baseURL, '')

    // if (status === 400) {
    //   if (urlPath === api.refreshToken) {
    //     store.dispatch(types.REMOVE_SESSION).then(() => router.push({ name: 'home' }))
    //   }
    // } else if (status === 401) {
    //   if (!error.config.retry && urlPath !== api.refreshToken) {
    //     return store.dispatch(types.REFRESH_SESSION).then(() =>
    //       apiService.client({
    //         ...error.config,
    //         headers: {
    //           ...error.config.headers,
    //           ...store.getters.headers
    //         },
    //         retry: true
    //       })
    //     )
    //   }

    //   store.dispatch(types.REMOVE_SESSION, { status: 401 }).then(() => router.push({ name: 'home' }))
    // } else if (status === 409) {
    //   store
    //     .dispatch(types.REMOVE_SESSION, { status: 409 })
    //     .then(() => router.push({ name: 'logout' }))
    //     .then(() => store.dispatch(types.SET_LOCAL_PROMPT, { value: 'consent' }))
    // } else if (status === 424) {
    //   router.push({ name: 'select-account' })
    // }

    console.warn('interceptors error', status, error.response, error)
    return Promise.reject(error)
  }
)

const apiService = {
  client,
  login({ login, password }) {
    return this.client.post('/api/login/', { login, password })
  }
}

export default apiService
