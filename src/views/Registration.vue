<template>
  <div class="register">
    <h3 class="register__title">Sign up</h3>
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="surname" placeholder="Surname" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <input type="password" v-model="passwordConfirm" placeholder="Password confirm" />
    <div class="register__control">
      <router-link :to="{ name: 'login' }">Login</router-link>
      <button @click="signup" :disabled="!signupActive" class="register__submit">Sign up</button>
    </div>
  </div>
</template>

<script>
import { REGISTER } from '@/store/modules/user'

export default {
  name: 'Register',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }),
  computed: {
    signupActive() {
      const isValid =
        this.password &&
        this.passwordConfirm &&
        this.password === this.passwordConfirm &&
        this.name &&
        this.surname &&
        this.email

      return isValid
    }
  },

  methods: {
    signup() {
      this.$store.dispatch(REGISTER, this).then(() => {
        this.$router.push({ name: 'summary' }).catch(() => {})
      })
    }
  }
}
</script>

<style lang="scss">
.register {
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
