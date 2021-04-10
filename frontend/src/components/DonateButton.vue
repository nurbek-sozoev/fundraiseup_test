<template>
  <button @click="onClick">
    DONATE
  </button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'DonateButton',
    methods: {
      ...mapActions(['donate']),
      onClick() {this.donate();}
    }
  }
</script>

<style scoped>
  button {
    font: 16px Arial, sans-serif;
    padding: 10px;
    width: 100%;
    margin: 5px;
    color: white;
    background-color: #5491EA;
    border-radius: 4px;
    border: 1px solid #5491EA;
  }

  button:hover {
    background-color: #5491EA;
    border-color: #5491EA;
  }
</style>
