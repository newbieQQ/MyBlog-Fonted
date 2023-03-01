<template>
  <div v-html="html"></div>
</template>

<script>
import { marked } from 'marked';

export default {
  data () {
    return {
      html : '<h1>Vue</h1>'
    }
  },
  created() {
    console.log(this.ArticleContext);
    this.html = marked(this.ArticleContext);
  },
  props: [
    'ArticleContext',
  ]

}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: auto auto;
}
</style>
