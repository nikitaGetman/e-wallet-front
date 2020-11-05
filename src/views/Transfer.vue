<template>
  <div class="contacts view-container view-grid">
    <money-transfer />

    <app-section title="Contacts" class="contacts__section">
      <template #control>
        <v-button theme="gray" is-text>Add</v-button>
      </template>
      <template #default>
        <div class="contacts__list">
          <v-contact-card
            v-for="(contact, index) of contacts"
            :key="index"
            :last-activity="contact.lastActivity"
            :name="contact.name"
            :surname="contact.surname"
            :avatar="contact.avatar"
            :id="contact.id"
          />
        </div>
      </template>
    </app-section>
  </div>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VButton from '@/components/common/VButton.vue'
import MoneyTransfer from '@/components/Transfer/MoneyTransfer.vue'
import VContactCard from '@/components/common/VContactCard.vue'
import { FETCH_CONTACTS, MODULE_NAME as CONTACTS_MODULE } from '@/store/modules/contacts'

export default {
  name: 'Summary',
  components: {
    AppSection,
    VButton,
    MoneyTransfer,
    VContactCard
  },
  computed: {
    contacts() {
      return this.$store.state[CONTACTS_MODULE].list
    }
  },
  created() {
    this.$store.dispatch(FETCH_CONTACTS)
  }
}
</script>

<style lang="scss">
.contacts {
  height: 100%;
  overflow: hidden;

  &__section {
    height: 100%;
    overflow: hidden;
  }
  &__list {
    position: absolute;
    top: 0;
    left: 24px;
    right: 0;
    bottom: 0;
    margin-top: 60px;

    overflow-y: auto;
  }
}
</style>
