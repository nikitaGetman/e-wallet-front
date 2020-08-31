<template>
  <div class="login">
    <h3 class="login__title">Sign in</h3>
    <input type="text" v-model="login" placeholder="Login" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signin">Sign in</button>
  </div>
</template>

<script>
import { LOGIN } from '@/store/modules/auth'

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
          this.$router.push({ name: 'summary' })
        })
      }
    }
  }
}
</script>

<style></style>
