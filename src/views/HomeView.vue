<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8" id="ArticleCard"> 
        <div  v-for="blog in showblog" :key="blog.id">
          <ArticleCard :blog='blog'/>
        </div>
      </div>
      <div class="col-sm-1" id="UserinfoCard"> 
        <UserinfoCard/> 
      </div>
      <PageTab 
        :blogs='blogs'
        :GetShowBlogs='GetShowBlogs'
      />
    </div>

  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import UserinfoCard from '../components/UserinfoCard.vue';
import PageTab from '../components/PageTab.vue'

import $ from 'jquery';

export default {
  name: 'HomeView',
  components: {
    ArticleCard,
    UserinfoCard,
    PageTab,
  }, 
  created() {
      $.ajax({
        url : 'http://119.29.52.203:8000/blog/',
        type : 'GET',
        dataType : 'json',
        success: (data) => {
          for (var i = 0; i < data.length; i++) {
            this.blogs.push(data[i]);
          }
        },
        error: function() {
          console.log("请求失败");
        }
      });
  },
  data() {
    return {
      blogs:     [], // 总共blog
      showblogs: [],
    }
  },
  watch :{
    GetShowBlogs(showblogs) {
      this.showblogs = showblogs;
      console.log("showblogs:");
    }
  },
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


.card-body {
  height: 200px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
