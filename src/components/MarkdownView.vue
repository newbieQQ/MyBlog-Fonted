<template>
  <div v-html="html"></div>
</template>

<script>
import { marked } from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'

const render = new marked.Renderer()

marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true,	// 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  sanitize: true, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
  tables: true,
  break: true,
	// 高亮的语法规范
  highlight: (code, lang) => hljs.highlight(code, { language: lang }).value,
});

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
  ],

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

img {
  width: 10px;
}
</style>
