<template>
  <v-fade-transition>
    <div class="dialog-wrapper" v-if="visible" @click.self="close">
      <div class="dialog">
        <div class="dialog__controls">
          <button class="dialog__close" @click="close"><i class="fa fa-times"></i></button>
        </div>
        <div class="dialog__content">
          <slot />
        </div>
      </div>
    </div>
  </v-fade-transition>
</template>

<script>
import VFadeTransition from '@/components/common/VFadeTransition.vue'

export default {
  name: 'VDialog',
  components: { VFadeTransition },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.dialog-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($black, 0.35);
}
.dialog {
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: $white;
  border-radius: 24px;
  min-width: 200px;
  min-height: 200px;

  &__controls {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
