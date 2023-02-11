<template>
  <DfCesium />
</template>

<script>
import DfCesium from './components/CesiumExample/No01-init.vue'

export default {
  name: 'App',
  components: {
    DfCesium
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
