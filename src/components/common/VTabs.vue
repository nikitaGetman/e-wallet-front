<template>
  <div class="v-tabs">
    <ul class="v-tabs__list">
      <li
        v-for="(tab, index) of tabs"
        :key="index"
        class="v-tab"
        :class="{ 'v-tab--active': tab === value }"
        @click="setTab(tab)"
      >
        <span class="tab__text">{{ tab }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    tabs: { type: Array, requeired: true },
    value: { type: String }
  },
  methods: {
    setTab(tab) {
      this.$emit('input', tab)
    }
  }
}
</script>

<style lang="scss">
.v-tabs {
  margin-bottom: 32px;
  &__list {
    display: flex;
  }
}
.v-tab {
  position: relative;
  display: block;
  margin-right: 48px;
  padding: 4px 0;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: capitalize;
  color: $gray-200;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 35%;
    right: 35%;
    transition: all 0.2s;
    background-color: transparent;
  }

  &--active {
    color: $gray-10;

    &:after {
      background-color: $primary-darken-text-color;
    }
  }
}
</style>
