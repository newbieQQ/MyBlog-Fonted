<template>
  <NavBar/>
  <router-view style="margin:80px auto"/>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>


<style>
.card {
  min-width: 350px;
}
</style>
