<template>
  <app-section title="PayPal Balance" class="summary-balance">
    <template #control>
      <router-link :to="{ name: 'MoneyTransfer' }">
        <v-button theme="text">Transfer money</v-button>
      </router-link>
    </template>
    <template #default>
      <div class="summary-balance__card">
        <v-card></v-card>
      </div>
      <div class="summary-balance__actions">
        <v-button>Send</v-button>
        <v-button>Request</v-button>
        <v-button>Send a Gift</v-button>
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VCard from '@/components/common/VCard.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'SummaryBalance',
  components: { AppSection, VCard, VButton }
}
</script>

<style></style>
