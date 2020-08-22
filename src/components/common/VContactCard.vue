<template>
  <div class="v-contact-card">
    <div class="v-contact-card__avatar" :style="`background-image: url(${avatar})`">
      <!-- <img :style="`background-image: url(${avatar})`" alt="User avatar" /> -->
    </div>
    <div class="v-contact-card__info">
      <div class="v-contact-card__name">
        <router-link :to="{ path: `user/${id}` }">{{ name }} {{ surname }}</router-link>
      </div>
      <div class="v-contact-card__date">{{ readableDate }}</div>
    </div>
    <div class="v-contact-card__actions">
      <v-button class="v-contact-card__action" theme="primary" is-text>Send</v-button>
      <v-button class="v-contact-card__action" theme="secondary" is-text>Request</v-button>
    </div>
  </div>
</template>

<script>
import { getReadableDate } from '@/utils/common'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'VContactCard',
  components: { VButton },
  props: {
    lastActivity: { type: [String, Number], required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    id: { type: Number, required: true },
    avatar: { type: String, required: true }
  },
  computed: {
    readableDate() {
      return getReadableDate(this.lastActivity)
    }
  }
}
</script>

<style lang="scss">
.v-contact-card {
  display: flex;
  align-items: center;
  margin: 0 12px 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__avatar {
    margin-right: 16px;
    width: 64px;
    height: 64px;
    border-radius: 20px;
    box-shadow: 0 0 16px $gray-360;
    overflow: hidden;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  &__name {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
  }
  &__date {
    color: $gray-200;
  }

  &__actions {
    margin-left: auto;
    font-size: 18px;
  }
  &__action {
    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }
}
</style>
