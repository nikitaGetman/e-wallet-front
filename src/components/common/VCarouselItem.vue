<template>
  <div class="carousel-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BCarouselItem',
  created() {
    if (!this.$parent.$data.isCarousel) {
      this.$destroy()
      throw new Error('You should wrap vCarouselItem on a vCarousel')
    }
    this.$parent.carouselItems.push(this)
  },
  beforeDestroy() {
    const index = this.$parent.carouselItems.indexOf(this)
    if (index >= 0) {
      this.$parent.carouselItems.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.carousel-item {
  width: unset !important;
}
</style>
