<!-- 个人中心 -->
<template>
  <div>
    <el-container id="personal-wrapper">
      <el-header style="height: auto">
        <personal-header></personal-header>
      </el-header>
      <el-container class="f-container">
        <el-aside width="150px">
          <personal-nav></personal-nav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PersonalHeader from "./components/PersonalHeader.vue";
import PersonalNav from "./components/PersonalNav.vue";
export default {
  name: "Personal",
  data() {
    return {};
  },
  components: {
    PersonalHeader,
    PersonalNav,
  },

  watch: {},

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.el-header,
.el-main,
.el-container,
#personal-wrapper {
  padding: 0;
}
>>> .el-main {
  min-height: 300px;
}
>>> .el-header {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #141038;
}
>>> .el-aside {
  margin-right: 1rem;
}
</style>
