<template>
  <div class="login">
    <h3 class="login__title">Sign in</h3>
    <input type="text" v-model="login" placeholder="Login" />
    <input type="password" v-model="password" placeholder="Password" />

    <div class="login__control">
      <router-link :to="{ name: 'registration' }">Sign up</router-link>
      <button @click="signin" class="login__submit">Sign in</button>
    </div>
  </div>
</template>

<script>
import { LOGIN } from '@/store/modules/user'

export default {
  name: 'Login',
  data: () => ({
    login: '',
    password: ''
  }),
  methods: {
    signin() {
      const { login, password } = this
      if (login && password) {
        this.$store.dispatch(LOGIN, { login, password }).then(() => {
          this.$router.push({ name: 'summary' }).catch(() => {})
        })
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 16px;
  }

  &__submit {
    padding: 8px;
    border: 1px solid black;
  }

  &__control {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
