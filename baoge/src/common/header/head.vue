<template>
    <header id="head_top" class="head_top">
        <div class='head-logo'>
          <div name="logo" class='logo' ><router-link :to="'/'" class="tohome">聆 听</router-link></div>
            <slot name="search"></slot>
            <div name="user" class="user">
            <router-link :to="'/login'" class="login_data">{{ msg }}</router-link>
            <router-link :to="''" class="register_data">{{ register }}</router-link>
          </div>
        </div>
        <nav-top signin-up='home'></nav-top>
    </header>
</template>
<script>
import navTop from '../../page/nav/nav'
export default {
  data () {
    return {
      msg: '登录',
      register: '注册'
    }
  },
  components: {
    navTop
  }
}
</script>

<style>
  .head_top{
    width: 100%;
    height: 144px;
    text-align: center;
  }
  .head-logo{
    width:100%;
    height: 100px;
    border-bottom: 3px solid #242424;
    background: #CD0000;

  }
  .logo{
    width: 50%;
    height: 100px;
    float: left;
    /* background: yellow; */
  }
  .tohome{
    width: 100%;
    height: 100%;
    font-size: 80px;
    display: block;
    line-height: 100px;
    font-style: italic;
    color: #FFFFFF;
    text-decoration: none
  }
  .user{
    width: 50%;
    height: 100px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_data, .register_data{
    width: 100px;
    height: 38px;
    font-size: 16px;
    border: 1px solid #FFFFFF;
    display: block;
    float: left;
    margin-left: 20px;
    line-height: 38px;
    border-radius: 4px;
    color: #FFFFFF;
    text-decoration: none;
  }
</style>
