<template>
  <div class="card">
    <div class="card-body">
      {{markdown}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      markdown: `
# 这是一个标题

- 这是一个列表
- 这是另一个列表

[这是一个链接](https://www.bing.com)
      `,
      html : ''
    }
  },
}
</script>
