<template>
  <div class="card">
    <div class="card-body">
      <div v-html="markdown"></div>
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
      return marked(this.markdown)
    }
  }
}
</script>
