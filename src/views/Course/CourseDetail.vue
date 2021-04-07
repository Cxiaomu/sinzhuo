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
          <p v-text="courseInfo.organization"></p>
          <h3>发布者</h3>
          <p v-text="courseInfo.publisher"></p>
          <h3>课程链接</h3>
          <p><el-link :href="courseInfo.link" v-text="courseInfo.link"></el-link></p>
          <h3>课程简介</h3>
          <p v-text="courseInfo.abstract"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      courseId: "",
      courseInfo: {
        id: "001",
        name: "前端开发",
        author: "Cxiaomu",
        time: "2020-09-21",
        organization: "山东建筑大学",
        publisher: "Cxiaomu",
        link: "http://localhost/iekcpt/index.php/Home/Teacher/gongxue.html",
        abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
        航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
        中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。
        中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。
        中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。
        中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
      },
    };
  },
  components: {},

  watch: {},

  created() {
    this.courseId = this.$route.query.courseId;
  },

  methods: {},
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
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
      h2, p {
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
