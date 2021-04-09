<template>
  <div>
    <Button
        v-for="amount in amounts"
        :amount="amount"
        :key="amount"
    />
  </div>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'ButtonsGroup',
    components: {Button},
    computed: {
      amounts() {
        return [40, 100, 200, 1000, 2500, 5000];
      }
    }
  }
</script>

<style scoped>

</style>
