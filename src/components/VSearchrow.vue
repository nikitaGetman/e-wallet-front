<template>
  <div class="searchrow">
    <div class="searchrow__container">
      <input type="text" class="searchrow__input" v-model="value" placeholder="Transaction or category" />
      <button class="searchrow__button">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSearchrow',
  data: function() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">
.searchrow {
  &__container {
    position: relative;
  }
  &__input {
    padding: 16px 32px 16px 48px;
    display: block;
    width: 100%;
    border: none;
    box-shadow: 0 0 15px $gray-400;
    border-radius: 24px;

    &::placeholder {
      color: $gray-300;
    }
  }
  &__button {
    position: absolute;
    color: $gray-300;
    top: 12px;
    left: 16px;
    font-size: 1.25em;
  }
}
</style>
