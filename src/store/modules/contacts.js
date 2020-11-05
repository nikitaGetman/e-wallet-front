import { throwError } from '@/store/utils'
import { LOADING, LOADED, SET_LIST, SET_MODEL } from '@/store/mutations/types'
import { LOGOUT } from '@/store/actions/types'

export const FETCH_CONTACTS = 'fetchContacts'
export const FETCH_USERS = 'fetchUsers'
export const ADD_CONTACT = 'addContact'

export const MODULE_NAME = 'contacts'

export default {
  state: {
    loading: false,
    list: [],
    model: {
      users: []
    }
  },
  getters: {},
  actions: {
    [FETCH_CONTACTS]: ({ commit, getters }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .fetchContacts()
        .then(list => {
          commit(SET_LIST, { name: MODULE_NAME, list })
        })
        .catch(throwError(commit, 'Ошибка получения списка контактов (fetchContacts)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [FETCH_USERS]: ({ commit, getters }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .fetchUsers()
        .then(list => {
          commit(SET_MODEL, { name: MODULE_NAME, model: { users: list } })
        })
        .catch(throwError(commit, 'Ошибка получения списка пользователей (fetchUsers)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [ADD_CONTACT]: ({ store, commit, getters }, id) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .addContact(id)
        .then(data => {
          commit(SET_LIST, { name: MODULE_NAME, list: [data, ...store.list] })
        })
        .catch(throwError(commit, 'Ошибка добавления контактов (addContact)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [LOGOUT]: ({ commit }) => {
      commit(SET_LIST, { name: MODULE_NAME, list: [] })
      commit(SET_MODEL, { name: MODULE_NAME, model: {} })
    }
  }
}
