<template>
  <button class="v-button" :class="buttonClasses" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    theme: {
      type: String,
      validator: v => ['primary', 'secondary', 'text'].includes(v),
      default: 'primary'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'v-button--rounded': this.rounded,
        'v-button--outlined': this.outlined,
        'v-button--icon': this.icon,
        [`v-button--${this.theme}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.v-button {
  border: 2px solid $primary;
  padding: 2px 4px;
  transition: all 0.2s;
  &:hover {
    color: $gray-100;
  }

  &--rounded {
    border-radius: 50%;
  }

  &--outlined {
    border: 2px solid $primary;
  }

  &--icon {
  }

  &--primary {
    color: $primary;
    border-color: $primary;
  }
  &--secondary {
    color: $secondary;
    border-color: $secondary;
  }
  &--text {
    font-weight: bold;
    color: $gray-200;
    border: none;
    display: inline-block;

    &:hover {
      color: $gray-100;
    }
  }
}
</style>
