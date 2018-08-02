<style lang="scss">
  .header {
    .user {
      font-size: 26px;
      top: 10px;
    }
    .vux-header .vux-header-right {
      top: 13px;
      .search {
        top: 13px;
        i {
          font-size: 20px;
        }
      }
    }
  }
</style>
<template>
  <div class="header">
    <x-header :left-options="{showBack: false}">
      <router-link to="/user"
                   slot="left"
                   class="user">≡</router-link>
      music
      <router-link to="/user"
                   slot="right"
                   class="search">
        <icon type="search"></icon>
      </router-link>
    </x-header>
    <tab :animate='false'>
      <tab-item :selected="$route.name==='recommend'"
                @on-item-click="onItemClick('/recommend')">推荐</tab-item>
      <tab-item :selected="$route.name==='rank'"
                @on-item-click="onItemClick('/rank')">排行</tab-item>
      <tab-item :selected="$route.name==='singer'"
                @on-item-click="onItemClick('/singer')">歌手</tab-item>
    </tab>
  </div>
</template>
<script>
import { XHeader,Icon,Tab, TabItem } from 'vux'
export default {
  name: "MeiHeader",
  components:{
    XHeader,
    Icon,
    Tab,
    TabItem
  },
  data(){
    return {
      select:"recommend"
    }
  },
  methods:{
    onItemClick(router){
      this.$router.push(router);
    }
  }
}
</script>
