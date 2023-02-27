<template>
  <div class="card">
    <div class="card-body">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      markdown: `
# 这是一个标题

- 这是一个列表
- 这是另一个列表

[这是一个链接](https://www.bing.com)
      `
    }
  },
  computed: {
    html () {
      let markdown = this.markdown;
      var MD = new marked.Renderer();
      marked.options({
        renderer : MD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
      console.log(marked(markdown))
      return marked(markdown, {sanitize: true});
    }
  }
}
</script>
