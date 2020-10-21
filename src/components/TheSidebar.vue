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

        <v-button rounded outlined icon @click="$refs.addCardDialog.open()">
          <i class="fas fa-plus"></i>
        </v-button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--card">
        <v-carousel v-if="cards.length">
          <v-carousel-item
            class="sidebar__carousel-item"
            v-for="(card, index) of cards"
            :key="index"
          >
            <credit-card :number="card.number" :expire="card.expire" :type="card.type" />
          </v-carousel-item>
        </v-carousel>
        <div class="sidebar__placeholder" v-else>
          You haven't added cards yet
        </div>
      </div>
    </div>
    <div class="sidebar__section sidebar__section--bank">
      <div class="sidebar__header">
        <h4 class="sidebar__title title">My Bank</h4>
        <v-button rounded outlined icon @click="$refs.addBankAccountDialog.open()">
          <i class="fas fa-plus"></i>
        </v-button>
      </div>
      <div class="sidebar__carousel sidebar__carousel--bank">
        <v-carousel v-if="banks.length">
          <v-carousel-item
            class="sidebar__carousel-item"
            v-for="(bank, index) of banks"
            :key="index"
          >
            <bank-card :account="bank.account" :name="bank.name" :status="bank.status" />
          </v-carousel-item>
        </v-carousel>
        <div class="sidebar__placeholder" v-else>
          You haven't added bank accounts yet
        </div>
      </div>
    </div>

    <!-- modals -->
    <v-add-card-dialog ref="addCardDialog" />
    <v-add-bank-account-dialog ref="addBankAccountDialog" />
  </div>
</template>

<script>
import CreditCard from '@/components/common/cards/CreditCard.vue'
import BankCard from '@/components/common/cards/BankCard.vue'
import VButton from '@/components/common/VButton.vue'
import VCarousel from '@/components/common/VCarousel.vue'
import VCarouselItem from '@/components/common/VCarouselItem.vue'
import VAddCardDialog from '@/components/common/dialogs/VAddCardDialog.vue'
import VAddBankAccountDialog from '@/components/common/dialogs/VAddBankAccountDialog.vue'

// import {FETCH_CARDS} from '@/store/modules/cards'
// import {FETCH_BANK_ACCOUNTS} from '@/store/modules/banks'

export default {
  name: 'TheSidebar',
  components: {
    CreditCard,
    BankCard,
    VButton,
    VCarousel,
    VCarouselItem,
    VAddCardDialog,
    VAddBankAccountDialog
  },
  computed: {
    cards() {
      return this.$store.state.cards.list || []
    },
    banks() {
      return this.$store.state.banks.list || []
    }
  },
  created() {
    // this.$store.dispatch(FETCH_CARDS)
    // this.$store.dispatch(FETCH_BANK_ACCOUNTS)
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

  & .carousel &__carousel-item {
    width: 484px;
    padding-right: 60px;
  }

  &__placeholder {
    min-height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $gray-10;
  }
}

@media (max-width: 1754px) {
  .sidebar {
    width: 450px;

    & .carousel &__carousel-item {
      width: 400px;
      padding-right: 48px;
    }
  }
}
@media (max-width: 1440px) {
  .sidebar {
    &__section {
      margin-top: 32px;
    }
  }
}
@media (max-width: 1280px) {
  .sidebar {
    width: 400px;

    & .carousel &__carousel-item {
      width: 350px;
      padding-right: 32px;
    }
  }
}
</style>
