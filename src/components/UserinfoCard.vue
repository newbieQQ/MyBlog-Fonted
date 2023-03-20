<template>
    <div class="card">
      <div class="profile"> 
        <img src="https://github.com/newbieQQ.png" alt="">
      </div>
      <h4>newbieQQ</h4>
      <div class="container">
        <a href="https://github.com/newbieQQ"><svg xmlns="http://www.w3.org/2000/svg" fill="black" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg> </a>
        <a href="https://gitee.com/qq5292"><svg t="1677913510912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1956" data-darkreader-inline-fill=""><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1957" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#5b6367;"></path></svg></a>
        <a href="https://blog.csdn.net/qq_43085783?spm=1000.2115.3001.5343"><svg t="1677913258603" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1775" data-darkreader-inline-fill="" ><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="1776" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a5000a;"></path></svg> </a>
        <a href=""></a>
        
      </div>
    </div>
</template>


<script scoped>
export default {
  name: 'UserinfoCard',
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.profile{
  width: 100px;
  height: 100px;
  margin: 10px auto;
}

.profile img{
  z-index: 9999;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10%;
}

.card {
  position: fixed;
  text-align: center;
  background-color: #ecf0f3;
}

svg {
  margin: 10px 10px;
  width: 40px;
}


</style>
