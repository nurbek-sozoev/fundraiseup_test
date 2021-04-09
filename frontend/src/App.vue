<template>
  <div id="app">
    <ButtonsGroup/>
  </div>
</template>

<script>
  import ButtonsGroup from './components/ButtonsGroup';

  export default {
    name: 'App',
    components: {ButtonsGroup}
  }
</script>

<style>
  #app {
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    width: 400px;
    padding: 20px;
  }
</style>
