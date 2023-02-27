<template>
  <div class="container">
    <div class="card">
      <div class="card-body" id="ArticleContext">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  components: {
  }
}
</script>

<style scoped>
@media (min-width: 1025px){
  .container {
    margin-top: 20px;
    width: 70%;
  }
}

@media (max-width: 1025px) {
  #UserinfoCard {
    display: none;
  }
  #ArticleCard {
    width: 100%;
  }
  .container {
    margin-top: 20px;
    width: 100%;
  }
}

</style>
