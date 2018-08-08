<style lang="scss">
  .recommend {
    h1 {
      font-weight: bold;
      height: 30px;
      line-height: 30px;
      padding-left: 5px;
    }
    .personalized-item {
      padding: 5px;
      box-sizing: border-box;
      .img {
        width: 100%;
        position: relative;
        img {
          width: 100%;
        }
        .count {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #fff;
          font-size: 10px;
          .iconfont {
            font-size: 12px;
          }
        }
      }
      .text {
        height: 32px;
        text-align: left;
        overflow: hidden;
        font-size: 11px;
        line-height: 16px;
      }
    }
    .newsong-item {
      padding: 5px;
      box-sizing: border-box;
      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .text {
        text-align: left;
        overflow: hidden;
        .name,
        .singer {
          font-size: 11px;
          line-height: 16px;
          height: 16px;
        }
        .singer {
          color: #757575;
        }
      }
    }
  }
</style>
<template>
  <div class="recommend">
    <mei-header></mei-header>
    <swiper :list="banners"
            :auto="true"></swiper>
    <div class="recommend-list">
      <h1>推荐歌单</h1>
      <flexbox wrap="wrap"
               :gutter=0>
        <flexbox-item :span="1/3"
                      v-for="(item,index) in personalized"
                      :key="index"
                      class="personalized-item">
          <div class="img">
            <img :src="item.picUrl" />
            <span class="count">
              <i class="iconfont  icon-headphones"></i>
              <font>{{parseInt(item.playCount/1000)}}万</font>
            </span>
          </div>
          <div class="text">
            <p class="name">{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class='new-song'>
      <h1>新歌速递</h1>
      <flexbox wrap="wrap"
               class="newsong-item"
               :gutter=0>
        <flexbox-item :span="1/3"
                      v-for="(item,index) in newSong"
                      :key="index"
                      class="newsong-item">
          <div class="img">
            <img :src="item.song.album.blurPicUrl" />
          </div>
          <div class="text">
            <p class="name">{{item.song.name}}</p>
            <p class="singer">
              <font v-for="(_item,_index) in item.song.artists"
                    :key="_index">
                {{_index!==0?'/':''}}{{_item.name}}
              </font>
            </p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>

import MeiHeader from "@/components/header"
import {Swiper,Flexbox, FlexboxItem} from "vux"
import {getBanners,getPersonalized,getNewSong} from '@/api/index'
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
    banners(){
      return this.$store.state.recommend.banners;
    },
    personalized(){
      return this.$store.state.recommend.personalized;
    },
    newSong(){
      return this.$store.state.recommend.newSong;
    }
  },
  async created(){
    const bannersData = await getBanners();
    if(bannersData.code === 200){
      this.$store.commit('recommend/getBanners',bannersData);
    }
    const personalizedData = await getPersonalized();
    if(bannersData.code === 200){
      this.$store.commit('recommend/getPersonalized',personalizedData)
    }
    const newSongData = await getNewSong();
    if(newSongData.code === 200){
      this.$store.commit('recommend/getNewSong',newSongData);
    }
  }
}
</script>
