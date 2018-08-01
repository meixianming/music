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
    <div class="test"> mei</div>
  </div>
</template>
<script>
import MeiHeader from "@/components/header"
export default {
  name: "recommend",
  components:{
    MeiHeader
  },
  data(){
    return {

    }
  }
}
</script>
