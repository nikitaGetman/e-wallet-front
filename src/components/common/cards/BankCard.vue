<template>
  <v-card class="bank-card" theme="secondary">
    <div class="bank-card__content">
      <div class="bank-card__background fas fa-university"></div>
      <div class="bank-card__text">
        <div class="bank-card__title">
          <span class="bank-card__name">{{ name }}</span>
          <span class="bank-card__status">{{ status }}</span>
        </div>
        <div class="bank-card__account">
          <span class="bank-card__account-part" v-for="(part, index) of splittedAccount" :key="index">{{ part }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import VCard from '@/components/common/VCard.vue'

export default {
  name: 'BankCard',
  components: { VCard },
  props: {
    account: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true, validator: val => ['checking', 'approved'].includes(val) }
  },
  computed: {
    splittedAccount() {
      const parts = this.account.split('')

      return [
        parts.slice(0, 4).join(''),
        parts.slice(4, 8).join(''),
        parts.slice(8, 12).join(''),
        parts.slice(12).join('')
      ]
    }
  }
}
</script>

<style lang="scss">
.bank-card {
  overflow: hidden;

  &__content {
    width: 100%;
    height: 100%;
    padding: 36px 48px;
  }

  &__background {
    position: absolute;
    right: -27%;
    top: 15%;
    z-index: 0;
    font-size: 16em;
    color: rgba($secondary, 0.2);
  }

  &__text {
    height: 100%;
    color: $secondary;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    display: flex;
    flex-direction: column;
  }
  &__name {
    font-size: 2em;
    font-weight: bold;
    line-height: 1;
  }
  &__status {
    text-transform: uppercase;
    font-size: 0.75em;
  }

  &__account {
    display: flex;
    justify-content: space-between;

    font-size: 2em;
    margin-right: 32px;
  }
}

@media (max-width: 1754px) {
  .bank-card {
    &__content {
      padding: 24px;
    }
  }
}

@media (max-width: 1440px) {
  .bank-card {
    &__name {
      font-size: 1.75em;
    }
    &__account {
      font-size: 1.75em;
      margin-right: 32px;
    }
  }
}
</style>
