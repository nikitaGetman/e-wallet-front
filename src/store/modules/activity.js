import { throwError } from '@/store/utils'
import { LOADING, LOADED, SET_LIST } from '@/store/mutations/types'
import { LOGOUT } from '@/store/actions/types'

export const FETCH_ACTIVITY = 'fetchActivity'

export const MODULE_NAME = 'activity'

export default {
  state: {
    loading: false,
    list: []
  },
  getters: {},
  actions: {
    [FETCH_ACTIVITY]: ({ commit, getters }) => {
      commit(LOADING, MODULE_NAME)
      return getters.apiService
        .fetchActivity()
        .then(list => {
          commit(SET_LIST, { name: MODULE_NAME, list })
        })
        .catch(throwError(commit, 'Ошибка получения последней активности (fetchActivity)'))
        .finally(() => commit(LOADED, MODULE_NAME))
    },
    [LOGOUT]: ({ commit }) => {
      commit(SET_LIST, { name: MODULE_NAME, list: [] })
    }
  }
}
