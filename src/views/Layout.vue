<!-- 布局组件 -->
<template>
  <div>
    <s-header></s-header>
    <router-view />
    <s-footer></s-footer>
  </div>
</template>

<script>
import SHeader from "../components/SHeader.vue";
import SFooter from "../components/SFooter.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    SHeader,
    SFooter,
  },

  watch: {},

  computed: {
    ...mapGetters(["isLogin"]),
  },
  created() {
    // 未登录
    if (!this.isLogin) {
      let params = {
        activeType: "login",
      };
      this.$router.push({
        name: "Login",
        params: params,
      });
    }
  },

  methods: {},
};
</script>

<style scoped lang="scss">
</style>
