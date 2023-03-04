<template>
<div class="card">
  <div class="card-body">
    <router-link :to="{name : 'article', params : {id : blog.id}}" class="page-link">
      <h4 id='ArticleTitle'>
          {{ blog.title }}
      </h4>
    </router-link>
    <hr>
    <div class="row">
      <div class="col-sm-2">
        <router-link :to="{name : 'article', params : {id : blog.id}}" class="page-link">
          <img class='img-fluid' :src="blog.img" alt="">
        </router-link>
      </div>
      <div class="col-sm-6" style="margin-left:50px">
        <div id='ArticleContent'>{{ blog.describe }}</div>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
  name: 'ArticleCard',
  data() {
  },
  props: [ 
    'blog',
  ],
}
</script>

<style scoped>
img {
  width: 100%;
  margin-top: 10px;
  float: left;
}

#ArticleTitle {
  margin-bottom: auto;
  margin-top: auto;
  height: 10%;
}

#ArticleContent {
  height: 75%;
}


#ArtcileDescribe {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#ArticleLabel {
  flex: 0;
  margin-bottom: 10px;
}

#DescribeText {
  flex: 1;
}

span{
  color: black;
}

.card {
  margin-bottom: 10px;
  list-style: none;
}
</style>
