<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#31b4f2"
      :default-active="activeIndex"
      @select="changePath"
    >
      <el-menu-item
        :index="index.toString()"
        v-for="(nav, index) in navList"
        :key="index"
      >
        <template slot="title">
          <div class="nav-item">
            <span :class="['iconfont', nav.icon]"></span>
            <span v-text="nav.name"></span>
          </div>
        </template>
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
      userStatus: "2", // 1-企业，2-教师，3-学生
      activeIndex: "0",
      navList: [],
    };
  },
  components: {},

  watch: {},

  created() {
    this.getNavList();
  },

  mounted() {
    // 侧边栏高亮
    this.$watch(
      "navList",
      () => {
        if (this.navList) {
          this.navList.forEach((item, index) => {
            if (item.path === this.$route.path) {
              this.activeIndex = index.toString();
              return;
            }
          });
        }
      },
      {
        deep: true,
      }
    );
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
    },
    // 切换当前页
    changePath(index) {
      let path = this.navList[index].path;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped lang="scss">
$activeColor: #31b4f2;
.nav-item {
  font-size: 1rem;
  .iconfont {
    font-size: 1.3rem;
  }
}
</style>
