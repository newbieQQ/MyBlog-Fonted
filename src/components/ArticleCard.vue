<template>
  <ul>
    <li class="card" v-for="blog in blogs" :key="blog.id">
      <div class="card-body">
        <div id='ArticleTitle'>{{ blog.title }}</div>
        <hr>
        <div id='ArticleContent'>没有描述</div>
      </div>
    </li>
  </ul>
</template>


<script>
import $ from 'jquery';

export default {
  name: 'ArticleCard',
  data() {
    return {
      blogs : []
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
        },
        error: function() {
          console.log("请求失败");
        }
      })
  }
}
</script>

<style scoped>
li {
  margin-bottom: 10px;
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

</style>
