<template>
  <Upload>
  </Upload>
</template>

<script>
import upload from './components/upload.vue'
import firebase from 'firebase'
export default {
  components: { upload },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
