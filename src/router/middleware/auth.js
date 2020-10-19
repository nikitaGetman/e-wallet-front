import { FETCH_PROFILE } from '@/store/modules/user'

export default function auth({ next, store }) {
  const { isAuthenticated, isProfileLoaded } = store.getters

  if (isAuthenticated) {
    if (!isProfileLoaded) {
      return store
        .dispatch(FETCH_PROFILE)
        .then(() => next())
        .catch(() => next({ name: 'login' }))
    } else {
      return next()
    }
  }

  return next({ name: 'login' })
}
