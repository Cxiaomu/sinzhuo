<template>
  <div>
    <div id="header-wrapper" class="f-container">
      <el-row>
        <el-col :span="3">
          <div class="avatar-box">
            <!-- <el-avatar size="large" :src="userAvatar"></el-avatar> -->
            <img class="personal-avatar" :src="userAvatar" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="personal-name">
            <span class="name" v-text="userInfo.name"></span>
          </div>
          <div class="personal-work">
            <span class="info-text unit" v-text="userInfo.work.unit"></span>
            <span class="info-text" v-text="userInfo.work.department"></span>
          </div>
          <div class="personal-contact">
            <div class="personal-tel-box">
              <span class="iconfont icondianhua"></span>
              <span class="info-text" v-text="userInfo.tel"></span>
            </div>
            <div class="personal-email-box">
              <span class="iconfont iconyouxiang"></span>
              <span class="info-text" v-text="userInfo.email"></span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalHeader",
  data() {
    return {
      userAvatar: require("../../../assets/img/avatar/1-avatar.jpg"),
      userInfo: {
        name: "陈柘含",
        work: {
          unit: "山东建筑大学", // 学校、公司
          department: "计算机科学与技术学院", // 学院、部门
        },
        tel: "17860618426",
        email: "Cxiaomu_la@163.com",
      },
    };
  },
  components: {},

  watch: {},

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
$activeColor: #31b4f2;
.iconfont {
  color: #fff;
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
  .personal-name {
    .name {
      color: #60c7f7;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
    }
  }
  .info-text {
    color: #fff;
    line-height: 2rem;
    display: inline-block;
  }
  .unit {
    margin-right: 1rem;
  }
  .personal-work {
  }
  .personal-contact {
    .personal-tel-box {
    }
    .personal-email-box {
    }
  }
}
</style>
