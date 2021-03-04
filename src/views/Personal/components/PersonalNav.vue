<template>
  <div>
    <el-menu
      active-text-color="#31b4f2"
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item v-for="(nav, index) in navList" :key="index" :index="index">
        <span slot="title">
          <span :class="['iconfont', nav.icon]"></span>
          <span v-text="nav.name"></span>
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { getNav } from "@/api/getJson.js";
export default {
  name: "PersonalNav",
  data() {
    return {
      userStatus: "1", // 1-企业，2-教师，3-学生
      navList: [],
    };
  },
  components: {},

  watch: {},

  created() {
    this.getNavList();
  },

  methods: {
    async getNavList() {
      let res = await getNav(this);
      if (res) {
        let navList = res.filter((item) => {
          return item.type.includes("0") || item.type.includes(this.userStatus);
        });
        this.navList = navList;
      }
      debugger;
    },
  },
};
</script>

<style scoped lang="scss">
$activeColor: #31b4f2;
</style>
