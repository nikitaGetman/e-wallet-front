<template>
  <div class="v-activity-card">
    <div class="v-activity-card__icon" :class="{ 'v-activity-card__icon--incoming': incoming }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.936 22.936">
        <!-- eslint-disable max-len -->
        <path
          d="M20.692 7.73c0-.619.492-1.111 1.111-1.111s1.127.492 1.127 1.111v14.079c0 .619-.508 1.127-1.127 1.127H7.74a1.131 1.131 0 01-1.127-1.127c0-.619.508-1.127 1.127-1.127h11.364L.328 1.921a1.14 1.14 0 010-1.587 1.112 1.112 0 011.587 0l18.777 18.777V7.73z"
          fill="#1e201d"
        />
      </svg>
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

export default {
  name: 'VActivityCard',
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
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0 0 16px $gray-360;

    svg {
      transform: scaleX(-1);
      path {
        fill: $red;
      }
    }

    &--incoming {
      svg {
        transform: scaleY(-1);
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
</style>
