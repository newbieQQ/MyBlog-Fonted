<template>
  <div class="container">
    <div class="card">
      <div class="card-body" id="ArticleContext">
      </div>
    </div>
  </div>
</template>

<script>
const Http = new XMLHttpRequest();
const url='http://119.29.52.203:8000/blog/1';
Http.open("GET", url);
Http.send();

//Http.onreadystatechange = (e) => {
//  console.log(Http.responseText)
//}



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
