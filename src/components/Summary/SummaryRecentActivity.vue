<template>
  <app-section title="Recent Activity" class="summary-recent-activity">
    <template #control>
      <router-link :to="{ name: 'History' }">
        <v-button theme="text">More</v-button>
      </router-link>
    </template>
    <template id="default">
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
          user: { name: 'Ivan', surname: 'Ivanov' }
        },
        {
          date: Date.now(),
          isIncoming: true,
          amount: 50.0,
          user: { name: 'Petr', surname: 'Kuznecov' }
        },
        {
          date: Date.now(),
          isIncoming: false,
          amount: 68.0,
          user: { name: 'Elena', surname: 'Black' }
        },
        {
          date: Date.now(),
          isIncoming: true,
          amount: 610.0,
          user: { name: 'Andrey', surname: 'Belov' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.summary-recent-activity {
}
</style>
