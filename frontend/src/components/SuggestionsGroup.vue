<template>
  <div>
    <SuggestionButton v-for="amount in exchangedAmounts" :key="amount" :amount="amount"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SuggestionButton from './SuggestionButton';

  export default {
    name: 'SuggestionsGroup',
    components: {SuggestionButton},
    computed: mapGetters(['exchangedAmounts'])
  }
</script>
