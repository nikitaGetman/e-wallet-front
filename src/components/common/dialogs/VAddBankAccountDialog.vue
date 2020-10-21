<template>
  <v-dialog ref="dialog" @close="reset">
    <div class="add-bank__body">
      <p class="add-bank__error-msg" v-if="error">{{ error }}</p>
      <v-card class="add-bank__card" theme="secondary">
        <div class="add-bank__card-content">
          <div class="add-bank__bank-account">
            <input
              type="text"
              :value="account"
              @input="setAccount"
              maxlength="19"
              placeholder="Bank account"
            />
          </div>

          <div class="add-bank__bank-name">
            <label>
              Bank name:
              <input type="text" v-model="bankName" placeholder="Bank name" />
            </label>
          </div>
        </div>
      </v-card>
    </div>

    <div class="add-bank__controls">
      <v-button @click="close">Cancel</v-button>
      <v-button @click="addBankAccount" theme="secondary" filled>Add</v-button>
    </div>
  </v-dialog>
</template>

<script>
import VDialog from '@/components/common/VDialog.vue'
import VButton from '@/components/common/VButton.vue'
import VCard from '@/components/common/VCard.vue'

import { ADD_BANK_ACCOUNT } from '@/store/modules/banks'

export default {
  name: 'VAddBankAccountDialog',
  components: { VDialog, VButton, VCard },
  data() {
    return {
      account: '',
      bankName: '',
      error: null
    }
  },

  methods: {
    open() {
      this.$refs.dialog.open()
    },
    close() {
      this.$refs.dialog.close()
    },
    addBankAccount() {
      const { account, bankName } = this

      this.$store
        .dispatch(ADD_BANK_ACCOUNT, { account, bankName })
        .then(() => {
          this.$refs.dialog.close()
        })
        .catch(err => {
          this.error = err || 'Something went wrong'
        })
    },
    reset() {
      this.account = ''
      this.bankName = ''
      this.error = null
    },
    setAccount(e) {
      const parts = e.target.value.split(' ')
      if (parts[parts.length - 1].length === 4 && parts.length < 4) parts.push('')
      this.account = parts.join(' ')
    }
  }
}
</script>

<style lang="scss">
.add-bank {
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
      color: $black;
      font-size: 1.15em;
    }

    input {
      background-color: transparent;
      color: $black;
      border: none;
      border-bottom: 1px solid $secondary;

      &::placeholder {
        color: $gray-100;
      }

      &:focus {
        border-color: $secondary-darken;
      }
    }
  }

  &__bank-account {
    margin: 16px 0 24px;

    input {
      width: 100%;
      padding: 8px;
      font-size: 2em;
    }
  }

  &__bank-name {
    margin-bottom: 24px;

    input {
      padding: 4px;
      text-transform: uppercase;
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    margin: 8px 24px;
  }
}
</style>
