import { throwError } from '@/store/utils'
import { LOADING, LOADED, SET_LIST, ADD_LIST_ITEMS } from '@/store/mutations/types'
import { LOGOUT } from '@/store/actions/types'

export const FETCH_CARDS = 'fetchCards'
export const ADD_CARD = 'addCard'

export const MODULE_NAME = 'cards'

export default {
  state: {
    loading: false,
    list: []
  },
  getters: {},
  actions: {
    [FETCH_CARDS]: ({ commit, getters }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .fetchCards()
        .then(list => {
          commit(SET_LIST, { name: MODULE_NAME, list })
        })
        .catch(throwError(commit, 'Ошибка получения карт (fetchCards)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [ADD_CARD]: ({ commit, getters }, { number, expireYear, expireMonth, holderName, cvv }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .addCard({ number, expireYear, expireMonth, holderName, cvv })
        .then(data => {
          commit(ADD_LIST_ITEMS, { name: MODULE_NAME, list: data })
        })
        .catch(throwError(commit, 'Ошибка добавления карты (addCard)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [LOGOUT]: ({ commit }) => {
      commit(SET_LIST, { name: MODULE_NAME, list: [] })
    }
  }
}
