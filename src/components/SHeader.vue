<template>
  <div id="header-wrapper">
    <div class="header-container">
      <img class="logo-img" @click="toIndex" src="../assets/img/logo/logo-all.png" />
      <div style="display: inline-block; float: right" class="nav-wrapper">
        <el-menu
          :default-active="activeMenu"
          mode="horizontal"
          active-text-color="#31b4f2"
          @select="changeMenu"
        >
          <el-menu-item
            v-for="menu in menuList"
            :key="menu.name"
            :index="menu.id"
          >
            <template slot="title">
              <!-- <span :class="['iconfont', 'iconyonghu' ,'nav-icon', menu.icon]"></span> -->
              <span class="nav-title" v-text="menu.name"></span>
            </template>
          </el-menu-item>
          <!-- 登录部分 start-->
          <el-menu-item index="7">
            <template slot="title">
              <div class="nav-title" v-if="!isLogin">
                <span @click="toLogin">登录</span>
                <el-divider direction="vertical"></el-divider>
                <span @click="toRegister">注册</span>
              </div>
              <div class="nav-title userName" v-else @click="toPersonal">
                <!-- <span class="iconfont iconyonghu nav-icon"></span> -->
                <span
                  class=""
                  v-text="username"
                  title="个人中心"
                ></span>
              </div>
            </template>
          </el-menu-item>
          <!-- 登录部分 end-->
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { getMenu } from "@/api/getJson.js";
import { mapGetters } from "vuex";
export default {
  name: "SHeader",
  data() {
    return {
      activeMenu: "0",
      menuList: [],
      username: "啦啦啦啦",
    };
  },
  components: {},

  watch: {
    $route: {
      // 导航栏高亮 
      handler(val) {
        this.activeHeader(val);
      }
    }
  },

  computed: {
    ...mapGetters(["isLogin"]),
  },
  created() {
    this.getMenu();
    this.activeHeader(this.$route)
  },
  methods: {
    // 获取导航栏数据
    async getMenu() {
      let res = await getMenu(this);
      if (res) {
        this.menuList = res;
      }
    },

    // 点击菜单栏
    changeMenu(index, indexPath) {
      if (index !== '7') {
        let url = this.menuList[index-1].path
        this.$router.push(url);
      }
    },

    // 去首页
    toIndex() {
      this.$router.push('/index')
    },

    // 导航栏高亮 
    activeHeader(route) {
      let nowPath = route.path;
      switch(nowPath) {
        case '/project': this.activeMenu = '1'; break;
        case '/post': this.activeMenu = '2'; break;
        case '/course': this.activeMenu = '3'; break;
        case '/firm': this.activeMenu = '4'; break;
        case '/mentor': this.activeMenu = '5'; break;
        case '/his': this.activeMenu = '6'; break;
        default: this.activeMenu = '0'
      }
    },

    // 登录
    toLogin() {
      console.log(this.$router)
      let params = {
        activeType: "login",
      };
      this.$router.push({
        name: "Login",
        params: params,
      });
    },

    // 注册
    toRegister() {
      let params = {
        activeType: "register",
      };
      this.$router.push({
        name: "Login",
        params: params,
      });
    },

    // 个人中心
    toPersonal() {
      this.$router.push("/personal");
    },
  },
};
</script>

<style scoped lang="scss">
#header-wrapper {
    width: 85%;
    margin: 0 auto;
  .header-container {
    padding: 1rem 0;
    overflow: hidden;
    .logo-img {
      width: 9.6rem;
      height: 4rem;
      cursor: pointer;
    }
    .nav-wrapper {
      .el-menu.el-menu--horizontal {
        border-bottom: solid 1px #fff;
      }
      .el-menu--horizontal > .el-menu-item {
        color: #212529;
        &:hover {
          color: #31b4f2;
        }
      }
      .iconfont {
        vertical-align: bottom;
        margin-right: 5px;
      }
      .nav-icon {
        font-size: 1.1rem;
      }
      .nav-title {
        font-size: 1.1rem;
      }
      .userName {
        max-width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
