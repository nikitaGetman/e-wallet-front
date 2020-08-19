<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>

<style lang="scss">
.card {
  width: 424px;
  height: 240px;
  background-color: $primary;
  //   box-shadow: 0 0 10px $primary;
  border-radius: $card-border-radius;
}
</style>
