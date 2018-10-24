<template>
  <div id="home">
    <header>
      <div class="header">
        <div class="logo">
          <span class="icon"></span>
        </div>
        <div class="search">
          <div class="search-icon">
            <span class="icon"></span>
          </div>
          <input type="text" placeholder="搜索关键词" />
        </div>
        <div class="login">
          <span class="icon"></span>
        </div>
      </div>
      <Nav @navBarChange='navBarChange' />
    </header>
  </div>
</template>
<script>
import Nav from '../components/nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  },
  data() {
    return {}
  },
  created() {
    console.log('【home.vue】');
  },
  methods: {
    navBarChange(params) {
      console.log(params);
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #eee;
}
.search{
  width: calc(100% - 120px);
  height: 40px;
  /* margin-top: 3px; */
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}
.logo,.login {
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo .icon{
  display: inline-block;
  width: 30px;
  height: 20px;
  background: url('../../static/assets/logo.png') no-repeat;
  background-size: cover;
}
.login .icon{
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('../../static/assets/mine1.png') no-repeat;
  background-size: cover;
}
.search-icon {
  width: 40px;
  height: 40px;
}
.search-icon .icon {
  display: inline-block;
  margin: 5px;
  width: 30px;
  height: 30px;
  background: url('../../static/assets/search.png') no-repeat;
  background-size: cover;
}
.search input{
  width: calc(100% - 40px);
}

</style>
