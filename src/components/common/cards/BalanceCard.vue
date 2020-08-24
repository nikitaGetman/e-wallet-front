<template>
  <v-card class="balance-card">
    <div class="balance-card__content">
      <i class="balance-card__background fab fa-paypal"></i>
      <div class="balance-card__brand">PayPal</div>
      <div class="balance-card__text">
        <span class="balance-card__title">Available</span>
        <span class="balance-card__balance">$ {{ balance.toFixed(2) }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import VCard from '@/components/common/VCard.vue'

export default {
  name: 'BalanceCard',
  components: { VCard },
  props: {
    balance: { type: Number, required: true }
  }
}
</script>

<style lang="scss">
.balance-card {
  overflow: hidden;

  &__content {
    width: 100%;
    height: 100%;
    padding: 64px 32px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__background {
    position: absolute;
    left: 0;
    top: 20%;
    z-index: 0;
    font-size: 25em;
    color: rgba($gray-400, 0.1);
  }

  &__brand {
    position: absolute;
    right: 7%;
    top: 5%;

    font-size: 2em;
    font-weight: bold;
    font-style: italic;
    color: rgba($gray-400, 0.1);
  }

  &__text {
    color: $white;
    font-weight: bold;
    position: relative;

    z-index: 10;

    display: flex;
    flex-direction: column;
  }
  &__title {
    margin-bottom: 8px;
    font-size: 1.25em;
  }
  &__balance {
    font-size: 3em;
    line-height: 1em;
  }
}
</style>
