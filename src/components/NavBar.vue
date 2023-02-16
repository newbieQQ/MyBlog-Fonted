<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">

  <div class="container">

    <router-link class="navbar-brand" :to="{name : 'home'}"> QQBlog </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"> <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">首页</router-link> </li>
        <li class="nav-item"> <router-link class="nav-link active" aria-current="page" :to="{name: 'article'}">文章</router-link> </li>
      </ul>

      <span class="navbar-text" style="text-align: center;">
        <router-link class="nav-link active" :to="{name :'home'}" style="display: inline-block">登录</router-link>
        <span class="nav-link active" style="display: inline-block">|</span>
        <router-link class="nav-link active" :to="{name :'home'}" style="display: inline-block">注册</router-link>
      </span>
    </div>
  </div>
</nav> 
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
.navbar {
  background-color: whitesmoke;
}
</style>

