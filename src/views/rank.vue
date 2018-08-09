<style lang="scss" scoped>
  .list {
    .item {
      display: flex;
      padding: 5px;
      .icon {
        width: 100px;
        height: 100px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .songlist {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .song {
          padding-left: 15px;
          height: 33px;
          line-height: 33px;
          color: #2e3030;
        }
      }
    }
  }
</style>
<template>
  <div class="rank">
    <mei-header></mei-header>
    <ul class="list">
      <li class="item">
        <div class="icon">
          <img :src="newSong.coverImgUrl"
               alt='coverImg' />
        </div>
        <ul class="songlist">
          <li class="song"
              v-for="(item,index) in newSong.tracks"
              :key="index"
              v-if="index<3">
            {{index+1}}.{{item.name}}
          </li>
        </ul>
      </li>
      <li class="item">
        <div class="icon">
          <img :src="hotSong.coverImgUrl"
               alt='coverImg' />
        </div>
        <ul class="songlist">
          <li class="song"
              v-for="(item,index) in hotSong.tracks"
              :key="index"
              v-if="index<3">
            {{index+1}}.{{item.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import MeiHeader from "@/components/header"
import {getRankInfo} from "@/api/index";
export default {
  name: "rank",
  components:{
    MeiHeader
  },
  data(){
    return {

    }
  },
  computed:{
    newSong(){
      return this.$store.state.rank.newSong
    },
    hotSong(){
      return this.$store.state.rank.hotSong
    }
  },
  async created(){
    const rankNewSong = await getRankInfo(0);
    if(rankNewSong.code === 200){
      this.$store.commit("rank/getNewSong",rankNewSong);
    }
    const hotSong = await getRankInfo(1);
    if(hotSong.code === 200){
      this.$store.commit("rank/getHotSong",hotSong);
    }

  }
}
</script>
