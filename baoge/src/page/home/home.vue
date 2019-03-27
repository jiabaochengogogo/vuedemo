<template>
  <div class="content">
    <head-top signin-up='home'></head-top>
    <div class='total'>
      <div class='carousel'>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../../common/header/head'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    headTop
  }
}
</script>

<style>
  .content{
    width: 100%;
    height: 100%
  }
  .total{
    width: 100%;
    margin: 0 auto;
  }
  .carousel{
    width: 100%;
    height:450px;
    background: yellow;
  }
  .carousel ul{
    width: 100%;
    height: 450px;
    margin: 0;
    padding: 0;
  }
  .carousel li{
    width: 100%;
    height: 100%;
    list-style: none;
  }
</style>
