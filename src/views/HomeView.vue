<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-8" id="ArticleCard"> <ArticleCard/> </div>
      <div class="col-sm-1" id="UserinfoCard"> <UserinfoCard/> </div>
    </div>

  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import UserinfoCard from '../components/UserinfoCard.vue';
export default {
  name: 'HomeView',
  components: {
    ArticleCard,
    UserinfoCard,
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
