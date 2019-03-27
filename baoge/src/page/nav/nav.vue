<template>
  <div id="nav_top" class="nav_top">
    <div class="nav-top-div">
      <ul class='nav-ul'>
      <li v-for="(navigation, index) in navigations" :key="navigation.id" class="nav-li" :class=" {category_active: index == selecItem}" @click="selectCategoryName(index)" >{{ navigation.navigationName }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getNavList } from '../../http/nav'
export default {
  data () {
    return {
      navigations: [],
      selecItem: 0
    }
  },
  components: {
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      getNavList()
        .then(res => {
          this.navigations = res.data
        })
        .catch(err => {
          this.$message.error(err.message)
        })
    },
    selectCategoryName (index) {
      this.selecItem = index
    }
  }
}
</script>

<style>
 .nav_top{
    width: 100%;
    height: 40px;
    margin: 0 auto;
    background: #242424;
  }
  .nav-ul{
    height:100%;
    margin:0;
    padding: 0;
  }
  .nav-li{
    float: left;
    line-height: 40px;
    list-style: none;
    padding-right: 20px;
    padding-left: 20px;
    margin-left:20px;
    margin-right:20px;
    text-align: center;
    font-size: 20px;
    color: #fff;;
    font-family: Georgia;
    border-radius:30px;
    cursor: pointer;
  }
  .nav-top-div{
    width: 60%;
    margin: 0 auto;
    height:100%;
    display: flex;
    justify-content: center;
  }
  .category_active{
    background: blue
  }
</style>
