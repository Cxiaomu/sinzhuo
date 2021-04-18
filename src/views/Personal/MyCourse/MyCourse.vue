<!-- 我的课程  -->
<template>
  <div>
    <el-row>
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        v-for="course in courseList"
        :key="course.id"
      >
        <div class="course-item-wrapper" ref="courseCard">
          <el-card shadow="hover">
            <div>
              <h3
                v-text="course.name"
                class="course-title"
                @click="toCourseById(course.id)"
              ></h3>
              <p>
                <span v-text="course.author"></span>
                <el-divider direction="vertical"></el-divider>
                <span v-text="course.unit"></span>
              </p>
              <p>
                <el-link :href="course.link" v-text="course.link"></el-link>
              </p>
              <p v-text="course.time"></p>
            </div>
            <div style="text-align: right">
              <el-button type="text" @click="toEdit(course.id)">编辑</el-button>
              <el-button type="text" @click="toDelete(course.id)"
                >删除</el-button
              >
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <div class="course-item-wrapper" @click="toCreatePost">
          <el-card shadow="hover" ref="newCard" :body-style="styleObj">
            <div class="newIcon-box">
              <span class="iconfont iconxinjian"></span>
              <p class="new-text">发布课程</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMyCourse } from "@/api/course";
import { formateDate } from "@/utils/ways";
export default {
  name: "MyCourse",
  data() {
    return {
      styleObj: {
        height: "",
      },
      courseList: [
        {
          id: "",
          name: "",
          author: "",
          time: "",
          unit: "",
          link: "",
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {
    this.handlePost();
    this.initData();
  },

  mounted() {
    this.setNewCardHeigh();
    window.addEventListener("resize", this.setNewCardHeight);
  },

  methods: {
    setNewCardHeigh() {
      this.styleObj.height = this.$refs.courseCard[0].clientHeight - 21 + "px";
    },

    // 初始化课程列表
    async initData() {
      let userId = localStorage.getItem("userId");
      let res = await getMyCourse({ userId: 2 });
      debugger;
      this.courseList = res;
      this.courseList.forEach((item) => {
        item.time = formateDate(new Date(item.time));
      });
    },

    // 前往课程详情
    toCourseById(id) {
      let query = {
        courserId: id,
      };
      this.$router.push({
        path: "/courseDetail",
        query: query,
      });
    },

    async handlePost() {},

    // 编辑
    toEdit(courseId) {
      let route = {
        path: "/createPost",
        query: {
          courseId: courseId,
        },
      };
      this.$router.push(route);
      debugger;
    },

    // 删除
    toDelete(courseId) {
      debugger;
    },

    // 新建岗位
    toCreatePost() {
      this.$router.push("/createPost");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
>>> .el-card__body {
  padding: 10px 20px;
}
.course-item-wrapper {
  margin: 0.5rem;
  .course-title {
    @extend .margin;
    @include more-text;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $activeColor;
    }
  }
  p {
    @include more-text;
    .el-link {
      @include more-text;
      &:hover {
        color: $activeColor;
      }
    }
  }
  .newIcon-box {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .new-text {
      @include more-text;
      color: $darkenGrayText;
    }
    .iconxinjian {
      display: inline-block;
      margin: 0 auto;
      font-size: 4rem;
      color: $createIconColor;
    }
  }
}
</style>
