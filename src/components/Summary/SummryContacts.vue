<template>
  <app-section title="Contacts" class="summary-contacts">
    <template #control>
      <router-link :to="{ name: 'Contacts' }">
        <v-button theme="gray" is-text>More</v-button>
      </router-link>
    </template>
    <template id="default">
      <div class="summary-contacts__list">
        <v-contact-card
          v-for="contact of contacts"
          :key="contact.id"
          :last-activity="contact.lastActivity"
          :name="contact.name"
          :surname="contact.surname"
          :avatar="contact.avatar"
          :id="contact.id"
        />
      </div>
    </template>
  </app-section>
</template>

<script>
import AppSection from '@/layouts/AppSection.vue'
import VButton from '@/components/common/VButton.vue'
import VContactCard from '@/components/common/VContactCard.vue'

export default {
  name: 'SummaryRecentActivity',
  components: { AppSection, VButton, VContactCard },
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.summary-contacts {
  &__list {
    margin-top: 32px;
  }
}
</style>
