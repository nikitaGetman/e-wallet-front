<template>
  <div class="sidebar">
    <div class="sidebar__control">
      <button class="sidebar__button">
        <i class="fas fa-cog"></i>
      </button>
    </div>
    <div class="sidebar__section sidebar__section--card">
      <div class="sidebar__header">
        <h4 class="sidebar__title title">My Card</h4>

        <v-button rounded outlined icon>
          <i class="fas fa-plus"></i>
        </v-button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--card">
        <v-carousel>
          <v-carousel-item>
            <v-card>1</v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card>2</v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card>3</v-card>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="sidebar__section sidebar__section--bank">
      <div class="sidebar__header">
        <h4 class="sidebar__title title">My Bank</h4>
        <v-button rounded outlined icon>
          <i class="fas fa-plus"></i>
        </v-button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--bank">
        <!-- TODO -->
      </div>
    </div>
  </div>
</template>

<script>
import VCard from '@/components/common/VCard.vue'
import VButton from '@/components/common/VButton.vue'
import VCarousel from '@/components/common/VCarousel.vue'
import VCarouselItem from '@/components/common/VCarouselItem.vue'

export default {
  name: 'TheSidebar',
  components: {
    VCard,
    VButton,
    VCarousel,
    VCarouselItem
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss">
.sidebar {
  width: 550px;
  background-color: #f0f1f5;
  padding: 32px 0 32px 32px;
  border-top-left-radius: $card-border-radius;
  border-bottom-left-radius: $card-border-radius;

  &__control {
    margin-right: 16px;
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
    margin-right: 32px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  &__carousel {
    &--card {
      .card {
        margin-right: 50px;
      }
    }
  }
}
</style>
