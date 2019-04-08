<template>
  <div class = 'login'>
    <head-top signin-up='login'></head-top>
    <div class="login-con">
      <div class="con">
      账号：<input type='text' placeholder="账号密码随便输入" name="phone" maxlength="11" >
      密码：<input type='text' placeholder="账号密码随便输入" name="password" maxlength="11"  >
      <router-link class="hello" :to="'hello'">点击提交</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../common/header/head'
// import HelloWorld from '../../src/components/HelloWorld'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  components: {
    // HelloWorld
    headTop
  }
}
</script>

<style>
  .login-con{
  }
  input{
    width: 480px;
    height: 40px;
    border: 1px solid black;
    padding-left: 20px;
    margin-top:5px;
  }
  .con{
    height: 100%;
    width: 550px;
    margin: 0 auto;
    padding-top: 400px;
  }
  .hello{
    width: 100px;
    height: 25px;
    margin:5px auto;
    display: block;
    border: 1px solid black;
    text-decoration: none;
  }
</style>
