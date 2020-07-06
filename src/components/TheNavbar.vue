<template>
  <aside class="navbar">
    <div class="navbar__logo">
      <router-link :to="{ name: 'summary' }">
        <i class="fab fa-paypal"></i>
      </router-link>
    </div>
    <div class="navbar__profile profile">
      <div class="profile__image-wrapper">
        <img class="profile__image" src="/images/avatar.png" alt="User avatar" />
      </div>
      <div class="profile__name">Hi, {{ username }}</div>
      <button class="profile__button" @click="logout">Log out</button>
    </div>
    <nav class="navbar__nav">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="(item, index) in navItems" :key="index">
          <router-link class="navbar__link" :to="item.to">
            <i :class="['navbar__link-icon', 'fas', item.icon]"></i>
            <span class="navbar__link-text">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      navItems: [
        { to: { name: 'summary' }, text: 'Summary', icon: 'fa-list-ul' },
        { to: { name: 'history' }, text: 'History', icon: 'fa-history' },
        { to: { name: 'money-transfer' }, text: 'Transfer', icon: 'fa-hand-holding-usd' },
        { to: { name: 'account' }, text: 'Account', icon: 'fa-id-card' },
        { to: { name: 'offers' }, text: 'Offers', icon: 'fa-business-time' },
        { to: { name: 'help' }, text: 'Help', icon: 'fa-tools' }
      ]
    }
  },
  computed: {
    username() {
      return 'Nikita'
    }
  },
  methods: {
    logout() {
      console.log('logout')
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 104px;
  height: 100%;
  padding: 20px 2px 12px;

  background: $primary-gradient;
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;

  text-align: center;
  color: $primary-text-color;

  &__logo {
    font-size: 2.5em;
    color: #3453b0;
  }
  &__profile {
    margin-top: 12px;
  }
  &__nav {
    margin-top: 32px;
  }
  &__list {
  }
  &__item {
    margin: 10px 0;
    padding: 16px;
    border-radius: 24px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: $white;
      box-shadow: 0 0 3px $primary-text-color;
      transform: translate(24px, -6px);

      .navbar__link {
        color: $black;
        &-icon {
          color: $primary-darken-text-color;
        }
      }
    }
  }
  &__link {
    color: $primary-text-color;
    text-align: center;
    &-icon {
      font-size: 1.75em;
      transition: 0.2s;
    }
    &-text {
      display: block;
      margin-top: 10px;
      font-size: 0.75em;
      font-weight: bold;
      transition: 0.2s;
    }
  }
}

.profile {
  text-align: left;
  padding: 0 10px;

  &__image-wrapper {
    padding: 0 8px 4px;
  }
  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &__button {
    font-size: 0.75em;
    color: $primary-darken-text-color;
    &:hover {
      color: $primary-lighter-text-color;
    }
  }
}
</style>
