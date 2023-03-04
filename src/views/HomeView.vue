<template>
  <div class="container">
    <div class="row">

      <div class="col-sm-8" id="ArticleCard"> 
        <div  v-for="blog in this.showblog" :key="blog.id">
          <ArticleCard :blog='blog'/>
        </div>
      </div>

      <div class="col-sm-1" id="UserinfoCard"> 
        <UserinfoCard/> 
      </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <div class="page-link" @click="prePage">
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        <li v-for="i in PageNum" :key="i">
          <div class="page-link" @click="page(i)">
            <span aria-hidden="true">{{ i }}</span>
          </div>
        </li>
        <li class="page-item">
          <div class="page-link" @click="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import UserinfoCard from '../components/UserinfoCard.vue';

import $ from 'jquery';

export default {
  name: 'HomeView',
  components: {
    ArticleCard,
    UserinfoCard,
  }, 
  created() {
      $.ajax({
        url : 'http://119.29.52.203:8000/blog/',
        type : 'GET',
        dataType : 'json',
        success: (data) => {
          for (var i = 0; i < data.length; i++) 
            this.blogs.push(data[i]);
            this.PageNum = Math.ceil(this.blogs.length / this.PageSize); 
            console.log(this.blogs);
            for (var j = 0; j < this.PageNum; j++) {
              this.pageblog[j] = this.blogs.slice(this.PageSize * j, this.PageSize * ( j + 1 ));
            }
            this.showblog = this.pageblog[this.CurrentPage];
        },
        error: function() {
          console.log("请求失败");
        }
      });
  },
  data() {
    return {
      blogs:       [], // 总共blog
      CurrentPage: 0,
      PageSize:    10,
      PageNum:     1,
      showblog:    [],
      pageblog:    [], // 每一页的blog
    }
  },
  methods:{
    nextPage() {
      if (this.CurrentPage === this.PageNum - 1) return ;
      this.showblog = this.pageblog[++this.CurrentPage];
    },
    prePage() {
      if (this.CurrentPage === 0) return ;
      this.showblog = this.pageblog[--this.CurrentPage];
    },
    page(i) {
      this.CurrentPage = i - 1;
      this.showblog = this.pageblog[i - 1];
    }
  },
}
</script>

<style scoped>
@media (min-width: 1025px){
  .container {
    margin-top: 80px;
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
    margin-top: 80px;
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
