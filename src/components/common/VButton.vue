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
      validator: v => ['primary', 'secondary'].includes(v),
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
    },
    isText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'v-button--rounded': this.rounded,
        'v-button--outlined': this.outlined,
        'v-button--is-text': this.isText,
        'v-button--icon': this.icon,
        [`v-button--theme-${this.theme}`]: true
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

  &--rounded {
    border-radius: 50%;
  }

  &--outlined {
    border: 2px solid $primary;
  }

  &--icon {
  }

  &--theme-primary {
    color: $primary;
    border-color: $primary;

    &[disabled]:hover {
      color: $primary;
      border-color: $primary;
    }

    &:hover {
      color: $primary-darken;
    }
  }
  &--theme-secondary {
    color: $secondary;
    border-color: $secondary;

    &[disabled]:hover {
      color: $secondary;
      border-color: $secondary;
    }

    &:hover {
      color: $secondary-darken;
    }
  }
  &--theme-gray {
    color: $gray-200;
    border-color: $gray-200;

    &[disabled]:hover {
      color: $gray-200;
      border-color: $gray-200;
    }

    &:hover {
      color: $gray-100;
    }
  }
  &--is-text {
    border: none;
    font-weight: bold;
    display: inline-block;
  }
}
</style>
