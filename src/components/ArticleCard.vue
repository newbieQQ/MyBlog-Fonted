<template>
    <div class="card">
      <div class="card-body">

        <div id='ArticleTitle'> 这是文章标题 </div>
        <hr>
        <div id='ArticleContent'>
            <img src="https://cdn.acwing.com/media/user/profile/photo/89158_lg_c7db67f49c.jpg">
            <div id="ArtcileDescribe"> 
              <div id="DescribeText">这是作品概要</div>
              <div id="ArticleLabel">
                <router-link :to="{name : 'home'}">#标签1</router-link>
              </div>
            </div>
        </div>

      </div>
    </div>
</template>


<script>
export default {
  name: 'ArticleCard',
}
</script>

<style scoped>
.card-body {
  height: 200px;
}

img {
  height: 100%;
  float: left;
}

#ArticleTitle {
  margin-bottom: auto;
  margin-top: auto;
  font-size: 100%;
  height: 10%;
}

#ArticleContent {
  height: 75%;
}


#ArtcileDescribe {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#ArticleLabel {
  flex: 0;
  margin-bottom: 10px;
}

#DescribeText {
  flex: 1;
}

</style>
