<template>
  <app-section title="Recent Activity" class="summary-recent-activity">
    <template #control>
      <router-link :to="{ name: 'history' }">
        <v-button theme="gray" is-text>More</v-button>
      </router-link>
    </template>
    <template #default>
      <div class="summary-recent-activity__list">
        <v-activity-card
          v-for="(activity, index) of recentActivities"
          :key="index"
          :date="activity.date"
          :incoming="activity.isIncoming"
          :amount="activity.amount"
          :user="activity.user"
        />
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VButton from '@/components/common/VButton.vue'
import VActivityCard from '@/components/common/VActivityCard.vue'

export default {
  name: 'SummaryRecentActivity',
  components: { AppSection, VButton, VActivityCard },
  computed: {
    recentActivities() {
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.summary-recent-activity {
  &__list {
    margin-top: 32px;
  }
}
</style>
