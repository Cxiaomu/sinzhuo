<template>
  <div>
    <h1>index</h1>
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
    if (!this.isLogin) {
      let params = {
        activeType: "login",
      };
      this.$router.push({
        path: "/login",
        params: params,
      });
    }
  },

  methods: {
    ...mapActions,
  },
};
</script>

<style scoped lang="scss">
</style>
