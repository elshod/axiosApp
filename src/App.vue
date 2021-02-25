<template>
  <div id="app">
    <doctors/>
  </div>
</template>
<script>
import doctors from './views/Doctors'

export default {
  name: 'App',
  components: {
    doctors
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
