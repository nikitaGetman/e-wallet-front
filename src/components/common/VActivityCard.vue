<template>
  <div class="v-activity-card"></div>
</template>

<script>
export default {
  name: 'VActivityCard',
  props: {
    date: { type: String, required: true },
    incoming: { type: Boolean, required: true },
    amount: { type: [String, Number], required: true },
    user: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
.v-activity-card {
  display: flex;
}
</style>
