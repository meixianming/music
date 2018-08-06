<style lang="scss">
  .recommend {
    .test {
      color: red;
    }
  }
</style>
<template>
  <div class="recommend">
    <mei-header></mei-header>
    <swiper :list="testList"
            :auto="true"></swiper>
  </div>
</template>
<script>
import MeiHeader from "@/components/header"
import {Swiper} from "vux"
import {getBanner} from '@/api/index'
export default {
  name: "recommend",
  components:{
    MeiHeader,
    Swiper
  },
  data(){
    return {
      testList:[
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    }
  },
  mounted(){
    const a = getBanner();
    console.log(a);
  }
}
</script>
