<template>
  <div>
    <div id="header-wrapper" class="f-container">
      <el-row>
        <el-col :span="3" class="hidden-sm-and-down">
          <div class="avatar-box">
            <!-- <el-avatar size="large" :src="headerAvatar"></el-avatar> -->
            <img class="personal-avatar" :src="headerAvatar" />
          </div>
        </el-col>
        <el-col :span="21">
          <div class="info-box">
            <div class="personal-name">
              <span class="name" v-text="headerInfo.name"></span>
            </div>
            <div class="personal-work">
              <span class="info-text unit" v-text="headerInfo.unit"></span>
              <span class="info-text" v-text="headerInfo.department"></span>
            </div>
            <div class="personal-contact">
              <div class="personal-tel-box">
                <span class="iconfont icondianhua"></span>
                <span class="info-text" v-text="headerInfo.tel"></span>
              </div>
              <div class="personal-email-box">
                <span class="iconfont iconyouxiang"></span>
                <span class="info-text" v-text="headerInfo.email"></span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PersonalHeader",
  data() {
    return {
      headerAvatar: require("@/assets/img/avatar/1-avatar.jpg"),
      headerInfo: {
        name: "陈柘含",
          unit: "山东建筑大学", // 学校、公司
          department: "计算机科学与技术学院", // 学院、部门
        tel: "17860618426",
        email: "Cxiaomu_la@163.com",
      },
    };
  },
  components: {},

  computed: {
    ...mapGetters(["userInfo"]),
  },
  watch: {},

  created() {
    if (localStorage.getItem('loginStatus')) {
      this.headerInfo = this.userInfo;
    }
  },

  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
.iconfont {
  color: $white;
  display: inline-block;
  margin-right: 5px;
}
#header-wrapper {
  .avatar-box {
    padding: 1rem;
    .personal-avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .info-box {
    padding: 1rem;
    .personal-name {
      .name {
        color: $lightActiveColor;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2rem;
      }
    }
    .info-text {
      color: $white;
      line-height: 2rem;
      display: inline-block;
    }
    .unit {
      margin-right: 1rem;
    }
  }
}
</style>
