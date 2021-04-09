<template>
  <button>
    ${{amount}}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      amount: Number
    }
  }
</script>

<style scoped>

</style>
