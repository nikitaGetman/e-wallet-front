<template>
  <div class="v-card" :class="cardClasses">
    <div class="v-card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    theme: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    }
  },
  computed: {
    cardClasses() {
      return {
        [`v-card--theme-${this.theme}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.v-card {
  position: relative;
  width: 100%;
  padding-top: 62%;
  border-radius: $card-border-radius;

  &--theme-primary {
    background-color: $primary;
  }
  &--theme-secondary {
    background-color: $secondary-lighter;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
@media (max-width: 1754px) {
  .v-card {
    border-radius: 32px;
  }
}
</style>
