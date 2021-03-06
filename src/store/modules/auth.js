import { saveStorageItem, loadStorageItem, removeStorageItem } from '@/utils/storage'
import { throwError } from '@/store/utils'
import { LOADING, LOADED, SET_MODEL } from '@/store/mutations/types'
import { LOGOUT } from '@/store/actions/types'

export const LOGIN = 'login'

export const MODULE_NAME = 'auth'

export const TOKEN_KEY = 'auth_token'

export default {
  state: {
    loading: false,
    model: {
      access: loadStorageItem(TOKEN_KEY) || null
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!(state.model || {}).access
    },
    headers: (state, { isAuthenticated }) => {
      if (!isAuthenticated) return {}

      return {
        Authorization: state.model.access
      }
    }
  },
  actions: {
    [LOGIN]: ({ commit, getters }, { login, password }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .login({ login, password })
        .then(model => {
          commit(SET_MODEL, { name: MODULE_NAME, model })
          saveStorageItem(TOKEN_KEY, model.access)
        })
        .catch(throwError(commit, 'Ошибка входа (login)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [LOGOUT]: ({ commit }) => {
      const model = { key: null }
      commit(SET_MODEL, { name: MODULE_NAME, model })
      removeStorageItem(TOKEN_KEY)
    }
  }
}
