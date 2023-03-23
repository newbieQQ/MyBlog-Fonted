<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">

  <div class="container">

    <router-link class="navbar-brand" :to="{name : 'home'}"> 
      <svg t="1677913946096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4995" data-darkreader-inline-fill=""><path d="M1024 799.54V672a32 32 0 0 0-24.24-31L960 631V384A320 320 0 0 0 640 64H384A320 320 0 0 0 64 384v256a320 320 0 0 0 320 320h224a31 31 0 0 0 4-0.25l250-31.26L984.24 959a31.53 31.53 0 0 0 7.76 1 32 32 0 0 0 32-32V799.54zM384 448a64.07 64.07 0 0 1 64-64h128a64.07 64.07 0 0 1 64 64v128a64.07 64.07 0 0 1-64 64H448a64.07 64.07 0 0 1-64-64z m64 256h160a31 31 0 0 0 4-0.25l250-31.26L960 697v62l-88.24-22a32 32 0 0 0-11.73-0.71L606 768h-94a128.18 128.18 0 0 1-116.66-75.34A127.3 127.3 0 0 0 448 704z m-64-576h256c141.16 0 256 114.84 256 256v231l-24.24-6a32 32 0 0 0-11.73-0.71l-28 3.5V416A224 224 0 0 0 608 192H352a285.94 285.94 0 0 0-197.25 78.17C196.72 186 283.71 128 384 128zM128 640V480c0-123.51 100.49-224 224-224h256c88.22 0 160 71.78 160 160v203.75l-75.58 9.45A127.36 127.36 0 0 0 704 576V448a128.14 128.14 0 0 0-128-128H384c-105.87 0-192 86.13-192 192v160a285.94 285.94 0 0 0 78.17 197.25C186 827.28 128 740.29 128 640z m743.76 225a32 32 0 0 0-11.73-0.71L606 896H480c-123.51 0-224-100.49-224-224V512a128.18 128.18 0 0 1 75.34-116.66A127.3 127.3 0 0 0 320 448v192c0 105.87 86.13 192 192 192h96a31 31 0 0 0 4-0.25l250-31.26L960 825v62z" fill="#5C5C66" p-id="4996" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#494f52;"></path></svg>
      <svg t="1677913946096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4995" data-darkreader-inline-fill=""><path d="M1024 799.54V672a32 32 0 0 0-24.24-31L960 631V384A320 320 0 0 0 640 64H384A320 320 0 0 0 64 384v256a320 320 0 0 0 320 320h224a31 31 0 0 0 4-0.25l250-31.26L984.24 959a31.53 31.53 0 0 0 7.76 1 32 32 0 0 0 32-32V799.54zM384 448a64.07 64.07 0 0 1 64-64h128a64.07 64.07 0 0 1 64 64v128a64.07 64.07 0 0 1-64 64H448a64.07 64.07 0 0 1-64-64z m64 256h160a31 31 0 0 0 4-0.25l250-31.26L960 697v62l-88.24-22a32 32 0 0 0-11.73-0.71L606 768h-94a128.18 128.18 0 0 1-116.66-75.34A127.3 127.3 0 0 0 448 704z m-64-576h256c141.16 0 256 114.84 256 256v231l-24.24-6a32 32 0 0 0-11.73-0.71l-28 3.5V416A224 224 0 0 0 608 192H352a285.94 285.94 0 0 0-197.25 78.17C196.72 186 283.71 128 384 128zM128 640V480c0-123.51 100.49-224 224-224h256c88.22 0 160 71.78 160 160v203.75l-75.58 9.45A127.36 127.36 0 0 0 704 576V448a128.14 128.14 0 0 0-128-128H384c-105.87 0-192 86.13-192 192v160a285.94 285.94 0 0 0 78.17 197.25C186 827.28 128 740.29 128 640z m743.76 225a32 32 0 0 0-11.73-0.71L606 896H480c-123.51 0-224-100.49-224-224V512a128.18 128.18 0 0 1 75.34-116.66A127.3 127.3 0 0 0 320 448v192c0 105.87 86.13 192 192 192h96a31 31 0 0 0 4-0.25l250-31.26L960 825v62z" fill="#5C5C66" p-id="4996" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#494f52;"></path></svg>
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item"> <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">文章</router-link> </li> -->
        <!-- <li class="nav-item"> <router-link class="nav-link active" aria-current="page" :to="{name: 'articles'}">文章</router-link> </li> -->
      </ul>

      <span class="navbar-text" style="text-align: center;">
        <div class="container">
          <router-link class="nav-link active" :to="{name :'login'}" style="display: inline-block">登录 | 注册</router-link>
        </div>
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

<style scoped>
.container {
  width: 100%;
}

.navbar {
  width: 100%;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  z-index: 9999;
  position: fixed;
  top: 5px;
}

svg {
  width: 30px;
}

</style>

