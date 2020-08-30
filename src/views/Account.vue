<template>
  <app-page>
    <div class="account view-container">
      <v-tabs v-model="activeTab" :tabs="tabs" />
      <div class="account__content">
        <div class="account__tab" v-if="activeTab === 'account'">
          <div class="v-row">
            <app-section title="Profile">
              <v-settings-card>
                <div class="account__card account__card--profile">
                  <div class="card__avatar">
                    <img class="card__image" src="/images/avatar.png" alt="User avatar" />
                  </div>
                  <div class="card__user">
                    <span class="card__name">{{ username }}</span>
                    <span class="card__text-light">Since {{ sinceDate }}</span>
                  </div>
                </div>

                <template #footer>
                  <v-button theme="primary" is-text>Update Photo</v-button>
                  <v-button theme="primary" is-text>Get PayPal.me</v-button>
                  <v-button theme="secondary" is-text>Edit</v-button>
                </template>
              </v-settings-card>
            </app-section>
            <app-section title="Adress">
              <v-settings-card>
                <div class="account__card account__card--adress">
                  <div class="card__text-light">You have {{ adresses.length }} adress</div>
                  <div class="card__city">{{ primaryAdress.city }}</div>
                  <div class="card__street">{{ primaryAdress.street }}, {{ primaryAdress.appartament }}</div>
                  <div class="card__index">{{ primaryAdress.postIndex }}</div>
                  <div class="card__text-light" v-if="primaryAdress.isPrimary">Primary Adress</div>
                </div>

                <template #footer>
                  <div class="card__footer--align-right">
                    <v-button theme="secondary" is-text>Manage all Adresses</v-button>
                  </div>
                </template>
              </v-settings-card>
            </app-section>
          </div>
          <div class="v-row">
            <app-section title="Account Options">
              <v-settings-card>
                <div class="account__card account__card--options">
                  <div class="card__row">
                    <div class="card__label">Language</div>
                    <div class="card__text-value">{{ accountOptions.language }}</div>
                  </div>
                  <div class="card__row">
                    <div class="card__label">Time zone</div>
                    <div class="card__text-value">{{ accountOptions.timeZone }}</div>
                  </div>
                  <div class="card__row">
                    <div class="card__label">Nationality</div>
                    <div class="card__text-value">{{ accountOptions.nationality }}</div>
                  </div>
                  <div class="card__row">
                    <div class="card__label">Merchant ID</div>
                    <div class="card__text-value">{{ accountOptions.merchantId }}</div>
                  </div>
                  <div class="card__row">
                    <div class="card__label">Passport</div>
                    <div class="card__text-value">{{ accountOptions.passport }}</div>
                  </div>
                </div>

                <template #footer>
                  <div class="card__footer--align-right">
                    <v-button theme="secondary" is-text>Update</v-button>
                  </div>
                </template>
              </v-settings-card>
            </app-section>
            <app-section title="Contacts">
              <v-settings-card>
                <div class="account__card account__card--contacts">
                  <div class="card__row">
                    <div class="card__label">Email</div>
                    <div class="card__values">
                      <div class="card__value" v-for="(email, index) of emails" :key="index">
                        <div class="card__email">{{ email.value }}</div>
                        <div class="card__text-light" v-if="email.isPrimary">Primary email</div>
                      </div>
                    </div>
                  </div>
                  <div class="card__row">
                    <div class="card__label">Phone</div>
                    <div class="card__values">
                      <div class="card__value" v-for="(phone, index) of phones" :key="index">
                        <div class="card__phone">{{ phone.value }}</div>
                        <div class="card__text-light" v-if="phone.isPrimary">Primary phone</div>
                      </div>
                    </div>
                  </div>
                </div>

                <template #footer>
                  <div class="card__footer--align-right">
                    <v-button theme="secondary" is-text>Update</v-button>
                  </div>
                </template>
              </v-settings-card>
            </app-section>
          </div>

          <div class="account__actions">
            <v-button theme="danger" filled>Close Account</v-button>
            <v-button filled>Upgrade account</v-button>
          </div>
        </div>

        <div class="account__tab" v-if="activeTab !== 'account'">This tab is not developed yet..</div>
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/layouts/AppPage.vue'
import AppSection from '@/layouts/AppSection.vue'
import VTabs from '@/components/common/VTabs.vue'
import VSettingsCard from '@/components/common/VSettingsCard.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Account',
  components: {
    AppPage,
    AppSection,
    VTabs,
    VSettingsCard,
    VButton
  },
  data: () => ({
    tabs: ['account', 'security', 'payments', 'notifications', 'seller tools'],
    activeTab: 'account'
  }),
  computed: {
    username() {
      return 'Nikita Getman'
    },
    sinceDate() {
      return '2018'
    },
    adresses() {
      return [
        {
          city: 'Moscow',
          street: 'st. Akademika Anokhina',
          appartament: '60',
          postIndex: '119687',
          isPrimary: true
        }
      ]
    },
    primaryAdress() {
      return this.adresses.find(a => a.isPrimary)
    },
    accountOptions() {
      return {
        language: 'English',
        timeZone: 'GMT +3:00',
        nationality: 'Russia',
        merchantId: 'L320DQPX893',
        passport: '**** 8972'
      }
    },
    emails() {
      return [
        {
          value: 'nikita.getman@gmail.com',
          isPrimary: true
        },
        {
          value: 'test-mail@gmail.com',
          isPrimary: false
        }
      ]
    },
    phones() {
      return [
        {
          value: '+7 (913) 254 44 88',
          isPrimary: true
        },
        {
          value: '+7 (900) 673 00 22',
          isPrimary: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.account {
  &__content {
    position: relative;
  }

  &__tab {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
  }

  &__card {
    &--profile {
      display: flex;
    }
    &--adress {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__actions {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 16px;
    }
  }
}
.card {
  &__avatar {
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
  }
  &__image {
    max-width: 160px;
  }
  &__user {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__name {
    font-size: 2em;
    font-weight: bold;
    line-height: 1em;
  }
  &__text-light {
    color: $gray-100;
  }
  &__city {
    font-size: 2em;
    font-weight: bold;
  }
  &__street,
  &__index {
    font-size: 1.25em;
    font-weight: bold;
    line-height: 1em;
  }
  &__index {
    margin-bottom: 8px;
  }
  &__footer {
    &--align-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  &__row {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $gray-360;
    &:last-child {
      border-bottom: none;
    }
  }
  &__text-value {
    font-weight: bold;
  }
  &__label {
    color: $primary-darkest-text-color;
  }
  &__values {
    text-align: right;
  }
  &__value {
    margin-top: 8px;
  }
  &__email,
  &__phone {
    font-size: 1.25em;
    line-height: 1em;
    font-weight: bold;
  }
}

@media (max-width: 1440px) {
  .card {
    &__avatar {
      flex: 0 0 35%;
    }
    &__city {
      font-size: 1.5em;
    }
    &__street,
    &__index {
      font-size: 1.15em;
    }
    &__name {
      font-size: 1.5em;
    }
    &__email,
    &__phone {
      font-size: 1em;
    }
  }
}
</style>
