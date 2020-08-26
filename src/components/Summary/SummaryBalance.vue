<template>
  <app-section title="PayPal Balance" class="summary-balance">
    <template #control>
      <router-link :to="{ name: 'transfer' }">
        <v-button theme="gray" is-text>Transfer money</v-button>
      </router-link>
    </template>
    <template #default>
      <div class="summary-balance__content">
        <div class="summary-balance__card">
          <balance-card :balance="balance" />
        </div>
        <div class="summary-balance__actions">
          <v-button theme="white" icon="arrow-right" class="summary-balance__action">Send</v-button>
          <v-button theme="white" icon="arrow-left" class="summary-balance__action">Request</v-button>
          <v-button theme="white" icon="gift" class="summary-balance__action">Send a Gift</v-button>
        </div>
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import BalanceCard from '@/components/common/cards/BalanceCard.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'SummaryBalance',
  components: { AppSection, BalanceCard, VButton },
  computed: {
    balance() {
      return 2300.1
    }
  }
}
</script>

<style lang="scss">
.summary-balance {
  &__content {
    margin: 0 auto;
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__card {
    margin-bottom: 32px;
    width: 100%;
  }
  &__actions {
    width: 100%;
    padding: 0 16px;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
  }
  &__action {
  }
}
</style>
