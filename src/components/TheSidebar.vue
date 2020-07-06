<template>
  <div class="sidebar">
    <div class="sidebar__control">
      <!-- <button class="sidebar__button">
        <i class="fas fa-filter"></i>
      </button> -->
      <button class="sidebar__button">
        <i class="fas fa-cog"></i>
      </button>
    </div>
    <div class="sidebar__section sidebar__section--card">
      <div class="sidebar__header">
        <h4 class="sidebar__title title">My Card</h4>
        <button class="sidebar__action"><i class="fas fa-plus"></i></button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--card">
        <!-- TODO -->
      </div>
    </div>
    <div class="sidebar__section sidebar__section--bank">
      <div class="sidebar__header">
        <h4 class="sidebar__title title">My Bank</h4>
        <button class="sidebar__action"><i class="fas fa-plus"></i></button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--bank">
        <!-- TODO -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>

<style lang="scss">
.sidebar {
  flex: 0 1 550px;
  background-color: #f0f1f5;
  padding: 32px;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;

  &__control {
    display: flex;
    justify-content: flex-end;
  }
  &__button {
    color: #c2c2c3;
    font-size: 1.25em;
    margin-left: 8px;
  }

  &__section {
    margin-top: 56px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  &__action {
    border-radius: 50%;
    border: 2px solid $primary;
    color: $primary;
    padding: 2px 4px;
  }
}
</style>
