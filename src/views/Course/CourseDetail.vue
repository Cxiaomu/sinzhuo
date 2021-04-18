<!-- 课程详情 -->
<template>
  <div id="course-detail-wrapper">
    <div class="f-container course-detail-container">
      <div class="f-container">
        <div class="detail-title">
          <h2 v-text="courseInfo.name"></h2>
          <el-row>
            <el-col :span="4">
              <p>
                作者：
                <span v-text="courseInfo.author"></span>
              </p>
            </el-col>
            <el-col :span="20">
              <p>发布时间：<span v-text="courseInfo.time"></span></p>
            </el-col>
          </el-row>
        </div>
        <div class="detail-item">
          <h3>所属组织</h3>
          <p v-text="courseInfo.unit"></p>
          <h3>发布者</h3>
          <p v-text="courseInfo.publisher"></p>
          <h3>课程链接</h3>
          <p>
            <el-link :href="courseInfo.link" v-text="courseInfo.link"></el-link>
          </p>
          <h3>课程简介</h3>
          <p v-text="courseInfo.abstract"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseDetail } from "@/api/course";
import { formateDate } from "@/utils/ways";
export default {
  name: "CourseDetail",
  data() {
    return {
      courseId: "",
      courseInfo: {
        id: "",
        name: "",
        author: "",
        time: "",
        unit: "",
        publisher: "",
        link: "",
        abstract: "",
      },
    };
  },
  components: {},

  watch: {},

  created() {
    this.courseId = this.$route.query.courseId;
    this.initData();
  },

  methods: {
    // 初始化课程数据
    async initData() {
      let res = await getCourseDetail({ courseId: this.courseId });
      debugger;
      if (res.length > 0) {
        this.courseInfo = res[0];
        this.courseInfo.time = formateDate(
          new Date(res[0]["time"]),
          "YYYY-MM-DD"
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#course-detail-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .course-detail-container {
    padding: 2rem 0;
    background-color: $white;
    >>> .el-row {
      // padding-left: 0.8rem;
    }
    >>> .el-divider--horizontal {
      margin: 1rem 0;
    }
    .detail-title {
      h2,
      p {
        @extend .margin;
      }
    }
    .detail-item {
      .item-tag {
        margin-left: 2rem;
        margin-bottom: 0rem;
      }
      h3 {
        margin-top: 2rem;
        padding-left: 1rem;
        border-left: solid 0.4rem #31b4f2;
      }
      p {
        padding-left: 2rem;
        line-height: 1.8rem;
      }
      .el-link:hover {
        text-decoration: none;
        color: $activeColor;
      }
    }
  }
}
</style>
