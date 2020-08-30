<template>
  <div class="history view-container">
    <div class="history__header">
      <h4 class="history__title title">My Transactions</h4>

      <div class="history__control-wrapper">
        <v-button
          v-for="option in dateRangeOptions"
          :key="option.key"
          class="history__date-range"
          :theme="dateRange === option ? 'primary' : 'gray'"
          :disabled="dateRange === option"
          is-text
          @click="setDateRange(option)"
          >{{ option.name }}</v-button
        >
      </div>
    </div>

    <div class="history__subtitle">
      <v-button theme="primary" is-text @click="getStatement()">Get Statement</v-button>
    </div>

    <div class="history__list-wrapper">
      <div class="history__list">
        <v-activity-card
          v-for="(activity, index) of activities"
          :key="index"
          :date="activity.date"
          :incoming="activity.isIncoming"
          :amount="activity.amount"
          :user="activity.user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/common/VButton.vue'
import VActivityCard from '@/components/common/VActivityCard.vue'

export default {
  name: 'History',
  components: {
    VButton,
    VActivityCard
  },
  data: () => {
    return {
      dateRange: null
    }
  },
  computed: {
    dateRangeOptions() {
      return [
        { name: 'Day', value: 'day' },
        { name: 'Week', value: 'week' },
        { name: 'Month', value: 'month' },
        { name: 'Year', value: 'year' }
      ]
    },
    activities() {
      return [
        {
          date: Date.now(),
          isIncoming: false,
          amount: 100.0,
          user: { name: 'Ivan', surname: 'Ivanov', id: 1 }
        },
        {
          date: Date.now() - 10000,
          isIncoming: true,
          amount: 50.0,
          user: { name: 'Petr', surname: 'Kuznecov', id: 2 }
        },
        {
          date: Date.now() - 1000000,
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black', id: 3 }
        },
        {
          date: Date.now() - 1000000000,
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov', id: 4 }
        },
        {
          date: Date.now(),
          isIncoming: false,
          amount: 100.0,
          user: { name: 'Ivan', surname: 'Ivanov', id: 1 }
        },
        {
          date: Date.now() - 10000,
          isIncoming: true,
          amount: 50.0,
          user: { name: 'Petr', surname: 'Kuznecov', id: 2 }
        },
        {
          date: Date.now() - 1000000,
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black', id: 3 }
        },
        {
          date: Date.now() - 1000000000,
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov', id: 4 }
        },
        {
          date: Date.now() - 1000000,
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black', id: 3 }
        },
        {
          date: Date.now() - 1000000000,
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov', id: 4 }
        },
        {
          date: Date.now() - 1000000,
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black', id: 3 }
        },
        {
          date: Date.now() - 1000000000,
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov', id: 4 }
        },
        {
          date: Date.now(),
          isIncoming: false,
          amount: 100.0,
          user: { name: 'Ivan', surname: 'Ivanov', id: 1 }
        },
        {
          date: Date.now() - 10000,
          isIncoming: true,
          amount: 50.0,
          user: { name: 'Petr', surname: 'Kuznecov', id: 2 }
        },
        {
          date: Date.now() - 1000000,
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black', id: 3 }
        },
        {
          date: Date.now() - 1000000000,
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov', id: 4 }
        }
      ]
    }
  },

  created() {
    this.setDateRange(this.dateRangeOptions[0])
  },
  methods: {
    setDateRange(value) {
      this.dateRange = value
    },
    getStatement() {
      console.log('Getting statement...')
    }
  }
}
</script>

<style lang="scss">
.history {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__header {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__subtitle {
    margin-bottom: 32px;
  }
  &__list-wrapper {
    height: 100%;
    overflow-y: auto;
  }
  &__list {
    margin-bottom: 32px;
  }
  &__date-range {
    margin-right: 16px;
  }
}
</style>
