<!-- 首页 -->
<template>
  <div>
    <s-swiper></s-swiper>
    <s-index-project></s-index-project>
    <s-index-post></s-index-post>
    <s-index-course></s-index-course>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SIndexCourse from '../components/SIndexCourse.vue';
import SIndexPost from '../components/SIndexPost.vue';
import SIndexProject from '../components/SIndexProject.vue';
import SSwiper from '../components/SSwiper.vue';
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    SSwiper,
    SIndexProject,
    SIndexPost,
    SIndexCourse
    },

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
