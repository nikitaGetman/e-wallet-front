<template>
  <div class="v-settings-card">
    <div class="v-settings-card__content">
      <slot name="default" />
    </div>
    <div class="v-settings-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSettingsCard'
}
</script>

<style lang="scss">
.v-settings-card {
  background-color: $white;
  width: 100%;
  flex: 1;
  border-radius: 24px;
  box-shadow: 0 0 16px $gray-360;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
