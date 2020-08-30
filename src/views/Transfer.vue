<template>
  <div class="contacts view-container view-grid">
    <money-transfer />

    <app-section title="Contacts" class="contacts__section">
      <template #control>
        <v-button theme="gray" is-text>Filter</v-button>
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
      return [
        {
          name: 'Ivan',
          surname: 'Ivanov',
          id: 1,
          lastActivity: Date.now(),
          avatar: '/images/user-avatars/1.jpg'
        },
        {
          name: 'Petr',
          surname: 'Kuznecov',
          id: 2,
          lastActivity: Date.now() - 100000,
          avatar: '/images/user-avatars/2.jpg'
        },
        {
          name: 'Elena',
          surname: 'Black',
          id: 3,
          lastActivity: Date.now() - 10000000,
          avatar: '/images/user-avatars/3.jpg'
        },
        {
          name: 'Andrey',
          surname: 'Belov',
          id: 4,
          lastActivity: Date.now() - 1000000000,
          avatar: '/images/user-avatars/4.jpg'
        },
        {
          name: 'Petr',
          surname: 'Kuznecov',
          id: 2,
          lastActivity: Date.now() - 100000,
          avatar: '/images/user-avatars/2.jpg'
        },
        {
          name: 'Elena',
          surname: 'Black',
          id: 3,
          lastActivity: Date.now() - 10000000,
          avatar: '/images/user-avatars/3.jpg'
        },
        {
          name: 'Andrey',
          surname: 'Belov',
          id: 4,
          lastActivity: Date.now() - 1000000000,
          avatar: '/images/user-avatars/4.jpg'
        },
        {
          name: 'Petr',
          surname: 'Kuznecov',
          id: 2,
          lastActivity: Date.now() - 100000,
          avatar: '/images/user-avatars/2.jpg'
        },
        {
          name: 'Elena',
          surname: 'Black',
          id: 3,
          lastActivity: Date.now() - 10000000,
          avatar: '/images/user-avatars/3.jpg'
        },
        {
          name: 'Andrey',
          surname: 'Belov',
          id: 4,
          lastActivity: Date.now() - 1000000000,
          avatar: '/images/user-avatars/4.jpg'
        },
        {
          name: 'Petr',
          surname: 'Kuznecov',
          id: 2,
          lastActivity: Date.now() - 100000,
          avatar: '/images/user-avatars/2.jpg'
        },
        {
          name: 'Elena',
          surname: 'Black',
          id: 3,
          lastActivity: Date.now() - 10000000,
          avatar: '/images/user-avatars/3.jpg'
        },
        {
          name: 'Andrey',
          surname: 'Belov',
          id: 4,
          lastActivity: Date.now() - 1000000000,
          avatar: '/images/user-avatars/4.jpg'
        }
      ]
    }
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
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 60px;

    overflow-y: auto;
  }
}
</style>
