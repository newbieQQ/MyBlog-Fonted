<template>
  <ul>
    <li class="card" v-for="blog in showblog" :key="blog.id">
      <div class="card-body">
        <div id='ArticleTitle'>{{ blog.title }}</div>
        <hr>
        <div id='ArticleContent'>{{ blog.describe }}</div>
      </div>
    </li>
    <li>
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
    </li>
  </ul>


</template>


<script>
import $ from 'jquery';

export default {
  name: 'ArticleCard',
  data() {
    return {
      CurrentPage: 0,
      PageSize:    10,
      PageNum:     1,
      blogs:       [], // 总共blog
      pageblog:    [], // 每一页的blog
      showblog:    [], // 要显示的blog
    }
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
          this.PageNum = Math.ceil(this.blogs.length / this.PageSize);
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
  }
}
</script>

<style scoped>
li {
  margin-bottom: 10px;
  list-style: none;
}

.card-body {
  height: 200px;
}

img {
  height: 100%;
  float: left;
}

#ArticleTitle {
  margin-bottom: auto;
  margin-top: auto;
  font-size: 100%;
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

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
