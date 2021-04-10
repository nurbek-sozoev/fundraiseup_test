<template>
  <div>
    <select @change="onChangeCurrency">
      <option v-for="option in currenciesOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <input
        type="text"
        :value="donationAmount"
        @input="onChangeAmount"
        @keydown="onInputKeyDown"
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'DonationAmount',
    computed: mapGetters(['currenciesOptions', 'donationAmount']),
    methods: {
      ...mapActions(['changeCurrency', 'changeAmount']),
      onChangeCurrency(e) {
        this.changeCurrency(e.target.value);
      },
      onInputKeyDown(e) {
        const isNumberOrBackspace = /[0-9]|Backspace/.test(e.key);
        if (!isNumberOrBackspace)
          e.preventDefault();
      },
      onChangeAmount(e) {
        this.changeAmount(e.target.value || 0);
      }
    }
  }
</script>

<style scoped>
  select {
    padding: 5px;
    margin: 15px 5px;
    width: 120px;
    font: 19px Arial, sans-serif;
    height: 40px;
    line-height: 26px;
    -webkit-appearance: menulist-button;
  }

  input {
    padding: 4px 10px;
    width: 140px;
    font-weight: bold;
    color: #5491EA;
    height: 28px;
    font: 22px Arial, sans-serif;
  }
</style>
