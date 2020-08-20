<template>
  <div class="app-section">
    <div class="app-section__header">
      <h4 class="app-section__title title title--large">{{ title }}</h4>
      <div class="app-section__control">
        <slot name="control" />
      </div>
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
  width: 48%;
  padding: 4px;
  margin-bottom: 32px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  &__title {
    margin: 0;
  }
}
</style>
