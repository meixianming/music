<template>
  <div class="hello">
    <div>
      <p>{{userInfo.name}}</p>
      <p>{{userInfo.age}}</p>
    </div>
    <br>
    <div>
      <p>{{singerInfo.name}}</p>
      <p>{{singerInfo.age}}</p>
    </div>
    <mt-button>211221</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    },
    singerInfo(){
      return this.$store.state.singerInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
