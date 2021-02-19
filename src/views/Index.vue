<!-- 首页 -->
<template>
  <div>
    <h1>index</h1>
    <button @click="toLogin">去登录</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {},

  watch: {},

  computed: {
    ...mapGetters(["isLogin"]),
  },
  created() {
    // 未登录
    // if (!this.isLogin) {
    //   let params = {
    //     activeType: "login",
    //   };
    //   this.$router.push({
    //     name: "Login",
    //     params: params,
    //   });
    // }
  },

  methods: {
    ...mapActions,
    toLogin() {
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped lang="scss">
</style>
