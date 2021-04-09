<template>
  <div id="app">
    <SuggestionsGroup
        :presets="presets"
    />
    <DonationAmount
        :amount="suggestionAmount"
        :locale="locale"
    />
    <DonateButton/>
  </div>
</template>

<script>
  import SuggestionsGroup from './components/SuggestionsGroup';
  import DonationAmount from './components/DonationAmount';
  import DonateButton from './components/DonateButton';

  export default {
    name: 'App',
    data: function () {
      return {
        suggestionAmount: 40,
        presets: [40, 100, 200, 1000, 2500, 5000],
        currency: 'USD',
        currencies: [
          {name: 'US Dollar', code: 'USD', symbol: '$', rate: 1},
          {name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597},
          {name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755},
          {name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993},
        ],
        locale: 'en-US',
      }
    },
    components: {SuggestionsGroup, DonationAmount, DonateButton }
  }
</script>

<style>
  #app {
    background-color: #ebebeb;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
  }
</style>
