<template>
  <div class="card">
    <div class="card-body">
      <vue-makrdown :source="markdown"/>
    </div>
  </div>
</template>

<script>

export default {
  compontents: {
  },
  data () {
    return {
      markdown: '#Hello Vue',
      html : ''
    }
  },
}
</script>
