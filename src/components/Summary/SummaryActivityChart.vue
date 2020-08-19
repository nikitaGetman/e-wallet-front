<template>
  <app-section title="Your Activity" class="summary-activity">
    <template #control>
      <div class="summary-activity__date-range">
        <v-button
          v-for="option in dateRangeOptions"
          :key="option.key"
          theme="text"
          :class="{ 'summary-activity__date-range--active': dateRange === option }"
          :disabled="dateRange === option"
          @click="setDateRange(option)"
          >{{ option.name }}</v-button
        >
      </div>
    </template>
    <template #default>
      <div class="summary-activity__chart">
        <!-- TODO chart -->
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VButton from '@/components/common/VButton.vue'
export default {
  name: 'SummaryActivityChart',
  components: { AppSection, VButton },
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
    }
  },
  created() {
    this.setDateRange(this.dateRangeOptions[0])
  },
  methods: {
    setDateRange(value) {
      this.dateRange = value
    }
  }
}
</script>

<style lang="scss">
.summary-activity {
  &__date-range {
    &--active {
      font-weight: bold;
      color: $primary;
    }
  }
}
</style>
