<template>
  <div class="app-section">
    <div class="app-section__header">
      <h4 class="app-section__title title title--large">{{ title }}</h4>
      <div class="app-section__control">
        <slot name="control" />
      </div>
    </div>
    <div class="app-section__second-row" v-if="$slots.secondRow">
      <slot name="secondRow" />
    </div>
    <slot name="default" />
  </div>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style lang="scss">
.app-section {
  position: relative;
  width: 48%;
  padding: 4px;
  margin-bottom: 32px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  &__title {
    margin: 0;
  }
}
</style>
