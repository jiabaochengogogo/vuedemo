<template>
  <div id="app">
    <!-- <img src="./assets/timg.jpg"> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  margin: auto;
  /* background: url(./assets/timg.jpg) no-repeat; */
  /* background-size: cover; */
}
</style>
