<template>
  <div class="app-section">
    <div class="app-section__header">
      <h4 class="app-section__title title">{{ title }}</h4>
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
  flex: 0 0 50%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  padding: 0 32px;

  &:last-child {
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }

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
@media (max-width: 1440px) {
  .app-section {
    padding: 0 24px;
  }
}
@media (max-width: 1240px) {
  .app-section {
    padding: 0 16px;
  }
}
</style>
