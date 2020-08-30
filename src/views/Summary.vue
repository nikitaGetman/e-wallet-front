<template>
  <div class="summary view-container">
    <div class="v-row">
      <summary-balance />
      <summary-activity-chart />
    </div>
    <div class="v-row">
      <summary-recent-activity />
      <summary-contacts />
    </div>
  </div>
</template>

<script>
import SummaryBalance from '@/components/Summary/SummaryBalance.vue'
import SummaryActivityChart from '@/components/Summary/SummaryActivityChart.vue'
import SummaryRecentActivity from '@/components/Summary/SummaryRecentActivity.vue'
import SummaryContacts from '@/components/Summary/SummryContacts.vue'

export default {
  name: 'Summary',
  components: {
    SummaryBalance,
    SummaryActivityChart,
    SummaryRecentActivity,
    SummaryContacts
  }
}
</script>

<style lang="scss"></style>
