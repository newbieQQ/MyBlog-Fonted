<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <h1 v-if="Title">{{Title}}</h1>
            <MarkdownView 
              v-if="ArticleContext"
              :ArticleContext='ArticleContext'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import MarkdownView from '../components/MarkdownView.vue';

export default {
  name: 'ArticlePage',
  components: {
    MarkdownView,
  },
  data() {
    return {
      ArticleContext: null,
      Title: null,
    }
  },
  created() {
      $.ajax({
        url:      'http://119.29.52.203:8000/blog/' + + this.$route.params.id + '/',
        type:     'GET',
        dataType: 'json',
        success:  (data) => {
          console.log(data);
          this.Title = data['title'];
          this.ArticleContext = data['content'];
        },
        error:    function() {
          console.log("请求失败");
        }
      });
  },
}
</script>

<style scoped>
@media (min-width: 1025px){
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
  }
}

@media (max-width: 1025px) {
  .container {
    margin-top: 20px;
    width: 100%;
  }
}

h1 {
  text-align: center;
}
</style>
