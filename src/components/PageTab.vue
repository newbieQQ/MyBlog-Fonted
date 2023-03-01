<template>
  {{PageNum}}
  {{PageSize}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <div class="page-link" @click="prePage">
        <span aria-hidden="true">&laquo;</span>
      </div>
    </li>
    <li v-for="i in PageNum" :key="i">
      <div class="page-link" @click="page(i)">
        <span aria-hidden="true">{{ i }}</span>
      </div>
    </li>
    <li class="page-item">
      <div class="page-link" @click="nextPage">
        <span aria-hidden="true">&raquo;</span>
      </div>
    </li>
  </ul>
</nav>
</template>


<script>

export default {
  name: 'PageTab',
  data() {
    return {
      CurrentPage: 0,
      PageSize:    10,
      PageNum:     1,
      pageblog:    [], // 每一页的blog
      showblogs:   [],
    }
  },
  props: [
    'blogs'
  ],
  created() {
    this.PageNum = Math.ceil(this.blogs.length / this.PageSize); 
    for (var j = 0; j < this.PageNum; j++) {
      this.pageblog[j] = this.blogs.slice(this.PageSize * j, this.PageSize * ( j + 1 ));
    }
    this.showblog = this.pageblog[this.CurrentPage];
    console.log(this.showblog)
  },
  methods:{
    nextPage() {
      if (this.CurrentPage === this.PageNum - 1) return ;
      this.showblog = this.pageblog[++this.CurrentPage];
      this.SetCurPage();
    },
    prePage() {
      if (this.CurrentPage === 0) return ;
      this.showblog = this.pageblog[--this.CurrentPage];
      this.SetCurPage();
    },
    page(i) {
      this.CurrentPage = i - 1;
      this.showblog = this.pageblog[i - 1];
      this.SetCurPage();
    }
  },
  watch : {
    GetShowBlogs(showblogs) {
      this.showblogs = showblogs;
      console.log(showblogs);
    }
  }
}
</script>

<style scoped>
</style>

