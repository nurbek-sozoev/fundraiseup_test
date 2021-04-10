<template>
  <button :class="className" @click="onClick">
    {{currencySymbol}}{{ amountToShow }}
  </button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'SuggestionButton',
    props: ['amount'],
    computed: {
      ...mapGetters(['currency', 'donationAmount', 'locale']),
      className() {
        return this.amount === this.donationAmount ? 'active' : ''
      },
      amountToShow() {
        return this.amount.toLocaleString(this.locale);
      },
      currencySymbol() {
        return this.currency.symbol;
      }
    },
    methods: {
      ...mapActions(['changeAmount']),
      onClick() {
        this.changeAmount(this.amount);
      }
    }
  }
</script>

<style scoped>
  .active {
    pointer-events: none;
    border-color: #5491EA;
    background-color: #5491EA;
    color: white;
  }

  button {
    font: 16px Arial, sans-serif;
    padding: 6px;
    width: 90px;
    margin: 5px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid white;
    box-shadow: 2px 3px #c8c8c8;
  }

  button:hover {
    background-color: #f8f8f8;
    border-color: #f8f8f8;
  }
</style>
