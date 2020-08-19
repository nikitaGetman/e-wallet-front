<template>
  <div class="carousel">
    <div class="carousel-items">
      <div
        class="carousel-sliderow"
        :style="sliderowPosition"
        @mousedown="dragStart"
        @mouseup="dragEnd"
        @touchstart.stop="dragStart"
        @touchend.stop="dragEnd"
      >
        <slot />
      </div>
    </div>
    <div v-if="indicator" class="carousel-indicator is-bottom">
      <a
        v-for="(item, index) in carouselItems"
        class="indicator-item"
        :class="{ 'is-active': index === activeItem }"
        @click="modeChange(index)"
        :key="index"
      >
        <slot :i="index" name="indicators">
          <span class="indicator-style is-dots is-small" />
        </slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BCarousel',
  props: {
    value: {
      type: Number,
      default: 0
    },
    hasDrag: {
      type: Boolean,
      default: true
    },
    indicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isCarousel: true,
      activeItem: this.value,
      carouselItems: [],
      dragX: 0
    }
  },
  computed: {
    sliderowPosition() {
      let x = 0
      if (this.carouselItems[this.activeItem] && this.carouselItems[this.activeItem].$el) {
        x = this.carouselItems[this.activeItem].$el.offsetWidth * this.activeItem
      }
      return { transform: `translateX(-${x}px)` }
    }
  },
  watch: {
    value(value) {
      if (value < this.activeItem) {
        this.changeItem(value)
      } else {
        this.changeItem(value, false)
      }
    },
    carouselItems() {
      if (this.activeItem < this.carouselItems.length) {
        this.carouselItems[this.activeItem].isActive = true
      } else if (this.carouselItems[0] !== undefined) {
        this.carouselItems[0].isActive = true
      }
    }
  },
  methods: {
    changeItem(newIndex) {
      if (this.activeItem === newIndex) return
      if (this.carouselItems[newIndex] === undefined) {
        newIndex = 0
      }
      this.activeItem = newIndex
      this.$emit('change', newIndex)
    },
    modeChange(value) {
      this.$emit('input', value)
      return this.changeItem(value)
    },
    prev() {
      if (this.activeItem > 0) {
        this.changeItem(this.activeItem - 1)
      }
    },
    next() {
      if (this.activeItem < this.carouselItems.length - 1) {
        this.changeItem(this.activeItem + 1)
      }
    },
    dragStart(event) {
      if (!this.hasDrag) return
      this.dragx = event.touches ? event.changedTouches[0].pageX : event.pageX
      if (!event.touches) {
        event.preventDefault()
      }
    },
    dragEnd(event) {
      if (!this.hasDrag) return
      const detected = event.touches ? event.changedTouches[0].pageX : event.pageX
      const diffX = detected - this.dragx
      if (Math.abs(diffX) > 50) {
        if (diffX < 0) {
          this.next()
        } else {
          this.prev()
        }
      }
    }
  },
  mounted() {
    if (this.activeItem < this.carouselItems.length) {
      this.carouselItems[this.activeItem].isActive = true
    }
  }
}
</script>

<style lang="scss">
.carousel {
  & &-indicator {
    padding-top: 24px;
  }
  .indicator-style {
    border: none !important;
    background-color: $gray-330 !important;
    &:hover {
      background-color: $gray-200 !important;
    }
  }
  .is-active .indicator-style {
    background-color: $secondary !important;
  }
  &-sliderow {
    display: flex;
    transition: 0.3s ease-in-out;
  }
}
</style>
