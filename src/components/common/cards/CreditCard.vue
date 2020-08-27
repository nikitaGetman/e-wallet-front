<template>
  <v-card class="credit-card">
    <div class="credit-card__content">
      <div class="credit-card__brand">
        <i class="fab fa-cc-mastercard" v-if="type === 'mastercard'"></i>
        <i class="fab fa-cc-visa" v-if="type === 'visa'"></i>
      </div>
      <div class="credit-card__text">
        <div class="credit-card__number">
          <span class="credit-card__number-part" v-for="(part, index) of splittedNumber" :key="index">{{ part }}</span>
        </div>
        <span class="credit-card__expire">EXP {{ expire }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import VCard from '@/components/common/VCard.vue'

export default {
  name: 'CreditCard',
  components: { VCard },
  props: {
    number: { type: String, required: true },
    expire: { type: String, required: true },
    type: { type: String, required: true, validator: val => ['mastercard', 'visa'].includes(val) }
  },
  computed: {
    splittedNumber() {
      const parts = this.number.split('')

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
.credit-card {
  overflow: hidden;

  &__content {
    width: 100%;
    height: 100%;
    padding: 36px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__brand {
    position: absolute;
    right: 8%;
    top: 6%;

    font-size: 3em;
    font-weight: bold;
    font-style: italic;
    color: rgba($gray-400, 0.15);
  }

  &__text {
    color: $white;

    display: flex;
    flex-direction: column;
  }
  &__number {
    display: flex;
    justify-content: space-between;

    font-size: 2em;
    margin-bottom: 48px;
  }
}
@media (max-width: 1440px) {
  .credit-card {
    &__content {
      padding: 24px;
    }
    &__number {
      margin-bottom: 24px;
      font-size: 1.75em;
    }
    &__expire {
      font-size: 12px;
    }
  }
}
</style>
