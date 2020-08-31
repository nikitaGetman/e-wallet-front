// import { FETCH_PROFILE } from '@/store/modules/profile'

export default function auth({ next, store }) {
  const { isAuthenticated, isProfileLoaded } = store.getters

  if (isAuthenticated) {
    if (!isProfileLoaded) {
      console.log('fetch profile')
      // return store
      //   .dispatch(FETCH_PROFILE)
      //   .then(() => next())
      //   .catch(() => next({ name: 'login' }))
    }

    return next()
  }

  return next({ name: 'login' })
}
