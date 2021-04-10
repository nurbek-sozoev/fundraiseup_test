<template>
  <div id="app">
    <SuggestionsGroup/>
    <DonationAmount/>
    <DonateButton/>
  </div>
</template>

<script>
  import SuggestionsGroup from './components/SuggestionsGroup';
  import DonationAmount from './components/DonationAmount';
  import DonateButton from './components/DonateButton';

  export default {
    name: 'App',
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
