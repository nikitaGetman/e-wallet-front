<template>
  <button class="v-button" :class="buttonClasses" v-bind="$attrs" v-on="$listeners">
    <span class="v-button__icon" v-if="icon">
      <v-icon :name="icon" size="1.5" />
    </span>
    <slot name="default" />
  </button>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue'

export default {
  name: 'VButton',
  components: { VIcon },
  props: {
    theme: {
      type: String,
      validator: v => ['primary', 'secondary', 'gray', 'white', 'danger'].includes(v),
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
      type: String,
      default: ''
    },
    isText: {
      type: Boolean,
      default: false
    },
    filled: {
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
        'v-button--filled': this.filled,
        'v-button--icon': this.icon || this.$slots.icon,
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
  transition: all 0.15s;
  padding: 12px 24px;
  border-radius: 24px;

  &--rounded {
    border-radius: 50%;
    padding: 4px 6px;
  }

  &--outlined {
    border: 2px solid $primary;
  }

  &--icon {
    font-weight: bold;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    width: 120px;
    padding: 16px 8px;
    border-radius: 16px;
    box-shadow: 0 0 16px $gray-360;

    &:hover {
      box-shadow: 0 0 16px $gray-200;
    }
    &:active {
      box-shadow: 0 0 16px $primary;
    }
    svg {
      path {
        fill: $primary;
      }
    }
  }
  &__icon {
    margin-bottom: 4px;
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
  &--theme-primary.v-button--filled {
    background-color: $primary;
    color: $white;
    &:hover {
      background-color: $primary-lighter;
      border-color: $primary-lighter;
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
  &--theme-white {
    color: $gray-10;
    border-color: $white;

    &[disabled]:hover {
      color: $gray-10;
      border-color: $white;
    }

    &:hover {
      color: $gray-10;
    }
  }
  &--theme-danger {
    color: $red;
    background-color: $pink;
    border-color: $pink;

    &[disabled]:hover {
      color: $red;
      background-color: $pink;
    }

    &:hover {
      background-color: $pink-darken;
      border-color: $pink-darken;
    }
  }

  &--is-text {
    border: none;
    font-weight: bold;
    display: inline-block;
    padding: 0;
  }
}
</style>
