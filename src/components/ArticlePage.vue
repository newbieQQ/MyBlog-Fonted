<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <MarkdownView/>
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
      ArticleContext: "",
    }
  },
  created() {
      $.ajax({
        url:      'http://119.29.52.203:8000/blog/' + + this.$route.params.id + '/',
        type:     'GET',
        dataType: 'json',
        success:  (data) => {
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
</style>
