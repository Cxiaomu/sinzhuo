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

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
</style>
