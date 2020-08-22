<template>
  <div class="app-page">
    <the-navbar />
    <main class="app-page__main">
      <v-searchrow class="view-container" />
      <section class="app-page__wrapper">
        <div class="app-page__content">
          <slot />
        </div>
      </section>
    </main>
    <the-sidebar />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import VSearchrow from '@/components/VSearchrow.vue'

export default {
  name: 'AppPage',
  components: {
    TheNavbar,
    TheSidebar,
    VSearchrow
  }
}
</script>

<style lang="scss">
.app-page {
  height: 100%;
  overflow-y: hidden;

  position: relative;
  display: flex;

  &__main {
    margin-left: 104px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }
  &__wrapper {
    height: 100%;
    overflow-y: auto;
  }
  &__content {
    max-height: 100%;
  }
}
</style>
