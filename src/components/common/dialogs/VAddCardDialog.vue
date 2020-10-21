<template>
  <v-dialog ref="dialog" @close="reset">
    <div class="add-card__body">
      <p class="add-card__error-msg" v-if="error">{{ error }}</p>
      <v-card class="add-card__card">
        <div class="add-card__card-content">
          <div class="add-card__card-number">
            <input
              type="text"
              :value="number"
              @input="setNumber"
              maxlength="19"
              placeholder="Card number"
            />
          </div>

          <div class="add-card__card-holder">
            <label>
              Holder:
              <input type="text" v-model="holderName" placeholder="Holder name" />
            </label>
          </div>

          <div class="add-card__row">
            <div class="add-card__card-expire">
              <label>
                Expire:
                <select name="expireMonth" v-model="expireMonth">
                  <option v-for="(month, index) of monthOptions" :key="index" :value="month">
                    {{ month }}
                  </option>
                </select>
                <span class="add-card__card-expire-separator">/</span>
                <select name="expireYear" v-model="expireYear">
                  <option v-for="(year, index) of yearOptions" :key="index" :value="year">
                    {{ year }}
                  </option>
                </select>
              </label>
            </div>

            <div class="add-card__card-cvv">
              <input type="password" v-model="cvv" placeholder="CVV" maxlength="3" />
            </div>
          </div>
        </div>
      </v-card>
    </div>

    <div class="add-card__controls">
      <v-button @click="close" theme="secondary">Cancel</v-button>
      <v-button @click="addCard" filled>Add</v-button>
    </div>
  </v-dialog>
</template>

<script>
import VDialog from '@/components/common/VDialog.vue'
import VButton from '@/components/common/VButton.vue'
import VCard from '@/components/common/VCard.vue'

import { ADD_CARD } from '@/store/modules/cards'

export default {
  name: 'VAddCardDialog',
  components: { VDialog, VButton, VCard },
  data() {
    return {
      number: '',
      expireYear: null,
      expireMonth: null,
      holderName: '',
      cvv: '',
      error: null
    }
  },
  computed: {
    yearOptions() {
      let years = []
      for (let i = 0; i < 5; i++) {
        years.push(`202${i}`)
      }
      return years
    },
    monthOptions() {
      let months = []
      for (let i = 1; i < 13; i++) {
        months.push(i < 10 ? `0${i}` : `${i}`)
      }
      return months
    }
  },
  methods: {
    open() {
      const { name, surname } = this.$store.state.user.model
      this.holderName = `${name} ${surname}`
      this.$refs.dialog.open()
    },
    close() {
      this.$refs.dialog.close()
    },
    addCard() {
      const { number, expireYear, expireMonth, holderName, cvv } = this

      this.$store
        .dispatch(ADD_CARD, { number, expireYear, expireMonth, holderName, cvv })
        .then(() => {
          this.$refs.dialog.close()
        })
        .catch(err => {
          this.error = err || 'Something went wrong'
        })
    },
    reset() {
      this.number = ''
      this.expireYear = null
      this.expireMonth = null
      this.holderName = ''
      this.cvv = ''
      this.error = null
    },
    setNumber(e) {
      const parts = e.target.value.split(' ')
      if (parts[parts.length - 1].length === 4 && parts.length < 4) parts.push('')
      this.number = parts.join(' ')
    }
  }
}
</script>

<style lang="scss">
.add-card {
  &__body {
    width: 400px;
    margin: 8px 12px 16px;
  }

  &__error-msg {
    margin: 0 0 8px;
    color: $red;
  }

  &__card-content {
    padding: 32px;

    label {
      color: $gray-360;
      font-size: 1.15em;
    }

    input {
      background-color: transparent;
      color: $white;
      border: none;
      border-bottom: 1px solid $primary-lighter;

      &::placeholder {
        color: $gray-200;
      }

      &:focus {
        border-color: $gray-400;
      }
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__card-number {
    margin: 16px 0 24px;

    input {
      width: 100%;
      padding: 8px;
      font-size: 2em;
    }
  }

  &__card-holder {
    margin-bottom: 24px;

    input {
      padding: 4px;
      text-transform: uppercase;
    }
  }

  &__card-expire {
    select {
      background-color: transparent;
      border: 1px solid $primary-lighter;
      border-radius: 16px;
      margin: 0 8px;
      padding: 4px;
      color: $white;

      option {
        color: $black;
      }

      &:focus {
        border-color: $gray-400;
      }
    }
  }

  &__card-cvv {
    width: 60px;

    input {
      width: 100%;
      font-size: 1.4em;
      letter-spacing: 3px;
      padding: 4px;
      text-align: center;
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    margin: 8px 24px;
  }
}
</style>
