import { throwError } from '@/store/utils'
import { LOADING, LOADED, SET_LIST, ADD_LIST_ITEMS } from '@/store/mutations/types'
import { LOGOUT } from '@/store/actions/types'

export const FETCH_BANK_ACCOUNTS = 'fetchBankAccounts'
export const ADD_BANK_ACCOUNT = 'addBankAccount'

export const MODULE_NAME = 'banks'

export default {
  state: {
    loading: false,
    list: []
  },
  actions: {
    [FETCH_BANK_ACCOUNTS]: ({ commit, getters }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .fetchBankAccounts()
        .then(list => {
          commit(SET_LIST, { name: MODULE_NAME, list })
        })
        .catch(throwError(commit, 'Ошибка получения банковских счетов (fetchBankAccounts)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [ADD_BANK_ACCOUNT]: ({ commit, getters }, { bankName, account }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .addBankAccount({ bankName, account })
        .then(data => {
          commit(ADD_LIST_ITEMS, { name: MODULE_NAME, list: data })
        })
        .catch(throwError(commit, 'Ошибка добавления банковского счета (addBankAccount)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [LOGOUT]: ({ commit }) => {
      commit(SET_LIST, { name: MODULE_NAME, list: [] })
    }
  }
}
