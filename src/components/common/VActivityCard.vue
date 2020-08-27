<template>
  <div class="v-activity-card">
    <div class="v-activity-card__icon" :class="{ 'v-activity-card__icon--incoming': incoming }">
      <v-icon size="1.5" :name="incoming ? 'arrow-top-right' : 'arrow-bottom-left'" />
    </div>
    <div class="v-activity-card__info">
      <div class="v-activity-card__name">
        <router-link :to="{ path: `user/${user.id}` }">{{ user.name }} {{ user.surname }}</router-link>
      </div>
      <div class="v-activity-card__date">{{ readableDate }}</div>
    </div>
    <div class="v-activity-card__amount">{{ readableAmount }}</div>
  </div>
</template>

<script>
import { getReadableDate } from '@/utils/common'
import VIcon from '@/components/common/VIcon.vue'

export default {
  name: 'VActivityCard',
  components: { VIcon },
  props: {
    date: { type: [String, Number], required: true },
    incoming: { type: Boolean, required: true },
    amount: { type: [String, Number], required: true },
    user: { type: Object, required: true }
  },
  computed: {
    readableDate() {
      return getReadableDate(this.date)
    },
    readableAmount() {
      return (this.incoming ? '' : '- ') + `$ ${this.amount}`
    }
  }
}
</script>

<style lang="scss">
.v-activity-card {
  display: flex;
  align-items: center;
  margin: 0 12px 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__icon {
    margin-right: 16px;
    width: 64px;
    height: 64px;
    border-radius: 20px;
    box-shadow: 0 0 16px $gray-360;
    line-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      path {
        fill: $red;
      }
    }

    &--incoming {
      svg {
        path {
          fill: $green;
        }
      }
    }
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

  &__amount {
    margin-left: auto;
    font-size: 24px;
    font-weight: bold;
  }
}

@media (max-width: 1584px) {
  .v-activity-card {
    margin: 0 4px 16px;
    &__name,
    &__amount {
      font-size: 18px;
    }
  }
}
@media (max-width: 1440px) {
  .v-activity-card {
    margin: 0 4px 12px;
    &__icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
    }
  }
}
</style>
