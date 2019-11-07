<template>
  <div class="content">
    <head-top signin-up='home'></head-top>
    <div class='total'>
      <div class='carousel-message'>
        <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="carouselList.length!=0">
          <swiper-slide v-for="carouselData in carouselList" :key="carouselData.id" ><img :src="carouselData.imgLinks"></swiper-slide>
          <div class="swiper-pagination"  v-for="(item,index) in carouselList" :key="index" slot="pagination" ></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
    <div class="content-body">
      <div class="content-body-left">
        <div class="hot-recommend-nav">
          <div class="hot-nav-left">
            <img>
            <a style="float:left">热门推荐</a>
            <div class="tab" style="float:left">
              <a :href="url" v-for="item in hotData" :key="item.id"></a><span>|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../../common/header/head'
import { getCarouselList } from '../../http/carousel'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      carouselList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        speed: 2000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'fade'
      }
    }
  },
  components: {
    headTop,
    swiper,
    swiperSlide
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
    height: 100%
  }
  .swiper-pagination-bullet{
    background-color: white
  }
  .swiper-slide{
    height: 445px;
  }
  .content-body{
    width: 60%;
    height: 110px;
    /* text-align: center; */
    padding: 20px 20px 40px;
    margin: 0 auto;
    border-left: 1px solid #EDEDED;
    border-right: 1px solid #EDEDED;;
  }
  .content-body-left{
    width: 80%;
  }
  .hot-recommend-nav{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
</style>
