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
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
}

* {
  background-color: #ecf0f3;
}
</style>
