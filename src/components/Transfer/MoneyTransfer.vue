<template>
  <app-section title="Money Transfer" class="money-transfer">
    <template #default>
      <div class="money-transfer__content">
        <div class="money-transfer__card">
          <balance-card :balance="balance" />
        </div>
        <div class="money-transfer__actions">
          <v-button theme="white" icon="arrow-right" class="money-transfer__action">Send</v-button>
          <v-button theme="white" icon="arrow-left" class="money-transfer__action">Request</v-button>
          <v-button theme="white" icon="gift" class="money-transfer__action">Send a Gift</v-button>
        </div>
        <div class="money-transfer__actions">
          <v-button theme="white" icon="receipt" class="money-transfer__action">Create an Invoice</v-button>
          <v-button theme="white" icon="to-bank" class="money-transfer__action">Transfer to Bank</v-button>
          <v-button theme="white" icon="handshake" class="money-transfer__action">Resolution Centre</v-button>
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
  name: 'MoneyTransfer',
  components: { AppSection, BalanceCard, VButton },
  computed: {
    balance() {
      return 2300.1
    }
  }
}
</script>

<style lang="scss">
.money-transfer {
  &__content {
    margin: 0 auto;
    max-width: 540px;
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
