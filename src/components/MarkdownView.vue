<template>
  <div v-html="html"></div>
</template>

<script>
import { marked } from 'marked';

export default {
  compontents: {
  },
  data () {
    return {
      markdown: `# Hello Vue`,
      html : '<h1>Vue</h1>'
    }
  },
  created() {
    this.html = marked(this.markdown);
  }

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
