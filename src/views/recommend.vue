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
    <swiper :list="banners"
            :auto="true"></swiper>
    <flexbox :gutter="0"
             wrap="wrap">
      <flexbox-item :span="1/3">
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item :span="1/3">
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item :span="1/3">
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item :span="1/3">
        <div class="flex-demo">1</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import MeiHeader from "@/components/header"
import {Swiper,Flexbox, FlexboxItem} from "vux"
import {getBanners} from '@/api/index'
export default {
  name: "recommend",
  components:{
    MeiHeader,
    Swiper,
    Flexbox,
    FlexboxItem
  },
  data(){
    return {
    }
  },
  computed:{
    banners() {
      return this.$store.state.recommend.banners
    }
  },
  async created(){
    const bannersData = await getBanners();
    if(bannersData.code ===200){
      this.$store.commit('recommend/getBanners',bannersData);
    }

  }
}
</script>
