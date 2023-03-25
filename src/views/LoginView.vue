<template>

  <div class="shell">

      <div class="container a-container" id="a-container">
          <form action="" method="" class="form" id="a-form">
              <h2 class="form_title title">创建账号</h2>
              <span class="form_span">选择注册方式活电子邮箱注册</span>
              <input type = "name" class="form_input" placeholder="UserName" id="RegisterUsername">
              <input type = "password" class="form_input" placeholder="Password" id="RegisterPassword">
              <input type = "password" class="form_input" placeholder="verifyPassword" id="RegisterVerify">
              <button class="form_button button submit" @click="SignUp">SIGN UP</button>
          </form>
      </div>

      <div class="container b-container" id="b-container">
          <form action="" method="" class="form" id="b-form">
              <h2 class="form_title title">登入账号</h2>
              <span class="form_span">选择登录方式活电子邮箱登录</span>
              <input type="text" class="form_input" placeholder="UserName" id='LoginUsername'>
              <input type="password" class="form_input" placeholder="Password" id='Loginpassword'>
              <a class="form_link">忘记密码？</a>
              <button class="form_button button submit" @click="SignIn">SIGN IN</button>
          </form>
      </div>

      <div class="switch" id="switch-cnt">
          <div class="switch_circle"></div>
          <div class="switch_circle switch_circle-t"></div>
          <div class="switch_container" id="switch-c1">
              <h2 class="switch_title title" style="letter-spacing: 0;">Welcome Back！</h2>
              <p class="switch_description description">已经有账号了嘛，去登入账号来进入奇妙世界吧！！！</p>
              <button  @click="LoginModel" class="switch_button button switch-btn">SIGN IN</button>
          </div>

          <div class="switch_container" id="switch-c2">
              <h2 class="switch_title title" style="letter-spacing: 0;">Hello Friend！</h2>
              <p class="switch_description description">去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！</p>
              <button  @click="RegisterModel" class="switch_button button switch-btn">SIGN UP</button>
          </div>
      </div>
  </div>

</template>

<script>
import $ from 'jquery'

export default {
  name: 'LoginView',
  components: {
  },
  data() {
    return {
    }

  },
  created() {
  },
  methods: {
    LoginModel() {
      let aContainer  = document.getElementById('a-container');
      let switchC1    = document.getElementById('switch-c1');
      switchC1.style.visibility   = 'hidden';
      aContainer.style.visibility = 'hidden';

      let bContainer = document.getElementById('b-container')
      let switchC2   = document.getElementById('switch-c2');
      let switchcnt  = document.getElementById('switch-cnt');

      switchC2.style.visibility = 'visible';
      bContainer.style.left     = '0';
      switchcnt.style.left      = 'calc(100% - 400px)';

    },
    RegisterModel() {
      let switchC2   = document.getElementById('switch-c2');
      switchC2.style.visibility   = 'hidden';

      let switchC1   = document.getElementById('switch-c1');
      let switchcnt  = document.getElementById('switch-cnt');
      switchC1.style.visibility   = "visible";
      switchcnt.style.left = '0';

      setTimeout(() => {
        let aContainer = document.getElementById('a-container');
        aContainer.style.visibility = 'visible';
      }, "300");
    },
    SignIn() {
      // 获取表单数据
      let password = document.getElementById('Loginpassword').value;
      let username = document.getElementById('LoginUsername').value;

       $.ajax({
        url: '',
        type: 'POST',
        data: {
          username: username,
          password: password
        },
        success: function (res) {
          console.log(res)
        },
        error: function (err) {
          console.log(err)
        }
        })
  },
  SignUp() {
    let password = document.getElementById('RegisterPassword').value;
    let username = document.getElementById('RegisterUsername').value;
    let verify   = document.getElementById('RegisterVerify').value;

    if (password === verify) {
      $.ajax({
        url: '',
        type: 'POST',
        data: {
          username: username,
          password: password
        },
        success: function (res) {
          console.log(res)
        },
        error: function (err) {
          console.log(err)
        }
      })
    } else {
      alert('两次密码不一致')
    }
    
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* 字体无法选中 */
    user-select: none;
}

.shell {
    position: relative;
    width: 1000px;
    height: 600px;
    min-width: 1000px;
    min-height: 600px;
    top : 100px;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
}

/* 设置响应式 */
@media (max-width: 1200px) {
    .shell {
        transform: scale(0.7);
    }
}

@media (max-width: 1000px) {
    .shell {
        transform: scale(0.6);
    }
}

@media (max-width: 800px) {
    .shell {
        transform: scale(0.5);
    }
}

@media (max-width: 600px) {
    .shell {
        transform: scale(0.4);
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: 0.5s;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}


.form_input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form_input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form_span {
    margin-bottom: 12px;
}

.form_link {
    color: #181818;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid #a0a5a8;
    line-height: 2;
}

.title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
    letter-spacing: 10px;
}

.description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
}

.button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4B70E2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}

.a-container {
    z-index: 100;
    left: calc(100% - 600px);
    transition: 0.5s;
}

.b-container {
    left: calc(100% - 600px);
    z-index: 0;
}

.switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
}

.switch_circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
}

.switch_circle-t {
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
}


.switch_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    transition: 1.25s;
}

.switch_button {
    cursor: pointer;
}

.switch_button:hover,
.submit:hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
    transition: 0.25s;
}

.switch_button:active,
.switch_button:focus {
    box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
}

#switch-c2 {
  visibility: hidden;
}
</style>
