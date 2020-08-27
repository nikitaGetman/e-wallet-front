<template>
  <app-section title="Your Activity" class="summary-activity">
    <template #control>
      <div class="summary-activity__control-wrapper">
        <v-button
          v-for="option in dateRangeOptions"
          :key="option.key"
          class="summary-activity__date-range"
          :theme="dateRange === option ? 'primary' : 'gray'"
          :disabled="dateRange === option"
          is-text
          @click="setDateRange(option)"
          >{{ option.name }}</v-button
        >
      </div>
    </template>
    <template #default>
      <div class="summary-activity__chart">
        <canvas ref="chart"></canvas>
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VButton from '@/components/common/VButton.vue'
import Chart from 'chart.js'

export default {
  name: 'SummaryActivityChart',
  components: { AppSection, VButton },
  data: () => {
    return {
      dateRange: null,
      chart: null
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
    activityData() {
      return {
        day: [15, 16, 16, 13, 18, 23, 25],
        week: [20, 15, 10, 25],
        month: [12, 14, 15, 10, 19, 25],
        year: [0, 8, 6, 15]
      }
    }
  },
  created() {
    this.setDateRange(this.dateRangeOptions[0])
  },
  mounted() {
    this.setupChart()
  },
  methods: {
    setDateRange(value) {
      this.dateRange = value
      if (this.chart) {
        this.updateChart()
      }
    },
    setupChart() {
      Chart.defaults.global.defaultFontColor = '#b0b2be'
      Chart.defaults.global.defaultFontFamily = 'Helvetica'

      const canvas = this.$refs.chart
      const ctx = canvas.getContext('2d')
      const gradient = ctx.createLinearGradient(10, 10, 10, 300)

      gradient.addColorStop(0, 'rgba(32, 58, 177, 0.3)')
      gradient.addColorStop(1, 'rgba(32, 58, 177, 0)')

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              data: null,
              backgroundColor: gradient,
              borderColor: '#4e69b6',
              borderWidth: 3,
              pointBackgroundColor: '#4e69b6',
              pointRadius: 4
            }
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                type: 'category',
                labels: []
              }
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  min: 0
                }
              }
            ]
          },
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltips: {
            mode: 'index',
            displayColors: false,
            backgroundColor: 'white',
            bodyFontSize: '16',
            bodyFontStyle: 'bold',
            bodyFontColor: '#203ab1',
            xPadding: 10,
            yPadding: 20,
            cornerRadius: 16,
            callbacks: {
              title: () => '',
              label: item => `$ ${item.value}`,
              footer: () => ''
            }
          },
          aspectRatio: 2,
          maintainAspectRatio: false
        }
      })

      this.updateChart()
    },
    updateChart() {
      let xLabels = []
      let data = this.activityData[this.dateRange.value]

      if (this.dateRange.value === 'day') {
        xLabels = ['12', '13', '14', '15', '16', '17']
      }
      if (this.dateRange.value === 'week') {
        xLabels = ['25', '3', '10', '17']
      }
      if (this.dateRange.value === 'month') {
        xLabels = ['January', 'February', 'March', 'April', 'May', 'June']
      }
      if (this.dateRange.value === 'year') {
        xLabels = ['2017', '2018', '2019', '2020']
      }

      this.chart.options.scales.xAxes = [
        {
          type: 'category',
          labels: xLabels
        }
      ]

      this.chart.data.datasets[0].data = data
      this.chart.update()
    }
  }
}
</script>

<style lang="scss">
.summary-activity {
  &__date-range {
    margin-right: 8px;
  }

  &__chart {
    position: relative;
    height: 360px;
  }
}

@media (max-width: 1800px) {
  .summary-activity {
    &__chart {
      height: 280px;
    }
  }
}
@media (max-width: 1440px) {
  .summary-activity {
    &__date-range {
      margin-right: 6px;
    }
    &__chart {
      height: 240px;
    }
  }
}
@media (max-width: 1240px) {
  .summary-activity {
    &__date-range {
      margin-right: 6px;
    }
    &__chart {
      height: 200px;
    }
  }
}
</style>
