<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters(["isLogin"]),
    ...mapGetters(["role"]),
    ...mapGetters(["userInfo"])
  },
  created() {
    if (localStorage.getItem('loginStatus')) {
      let params = JSON.parse(localStorage.getItem('userInfo'));
      this.userLogin(params);
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('role', this.role);
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    });
  },
  methods: {
    ...mapActions(["userLogin"]),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
