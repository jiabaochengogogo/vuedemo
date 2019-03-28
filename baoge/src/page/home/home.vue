<template>
  <div class="content">
    <head-top signin-up='home'></head-top>
    <div class='total'>
      <div class='carousel-message'>
        <ul>
          <li v-for="carouselData in carouselList" :key="carouselData.id" ><img :src="carouselData.imgLinks"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../../common/header/head'
import { getCarouselList } from '../../http/carousel'
export default {
  name: 'home',
  data () {
    return {
      carouselList: []
    }
  },
  components: {
    headTop
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      getCarouselList()
        .then(res => {
          console.log(res)
          this.carouselList = res.data
        })
        .catch(err => {
          this.$message.error(err.message)
        })
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .content{
    width: 100%;
    height: 100%
  }
  .total{
    height: 100%;
    margin: 0 auto;
  }
  .carousel-message{
    height: 445px;
    background: yellow;
  }
  .carousel-message ul{
    width: 100%;
    height: 445px;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .carousel-message ul li{
    width: 100%;
    height: 100%;
    list-style: none;
    float: right;
  }
  .carousel-message ul li img{
    width: 100%;
    height: 100%;
  }
</style>
