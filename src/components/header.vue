<style lang="scss">
  .recommend {
    .test {
      color: red;
    }
  }
</style>
<template>
  <div class="header">
    <mt-header title="music">
      <mt-button v-link="'/'"
                 icon="back"
                 slot="left"></mt-button>
      <mt-button icon="more"
                 slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: "MeiHeader",
  data(){
    return {

    }
  }
}
</script>
