<!-- 精品课程 -->
<template>
  <div style="background: #f4f4f4">
    <div id="course-list-wrapper" class="content-wrapper">
      <el-row>
        <el-col
          :xs="12"
          :sm="8"
          :md="8"
          :lg="6"
          :xl="6"
          v-for="course in courseList"
          :key="course.id"
        >
          <div class="course-wrapper" @click="toCourseById(course.id)">
            <div class="course-detail-box">
              <h3 class="course-title" v-text="course.name"></h3>
              <p class="course-detail" v-text="course.abstract"></p>
              <div class="course-info">
                <el-row>
                  <el-col :span="12">
                    <el-rate
                      v-model="course.score"
                      disabled
                      show-score
                      text-color="#ff9900"
                    ></el-rate>
                  </el-col>
                  <el-col :span="1">
                    <el-divider direction="vertical"></el-divider>
                  </el-col>
                  <el-col :span="11">
                    <span v-text="course.view"></span>人观看
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="course-list-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="this.pageSize"
          :pager-count="5"
          :total="total"
          @current-change="changePage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseList, getCourseTotal } from '@/api/course'
export default {
  name: "Course",
  data() {
    return {
      nowPage: 1,
      pageSize: 10,
      total: 10,
      courseList: [
        {
          id: 9,
          name: "",
          abstract: "",
          score: 4,
          view: 123,
        }
      ],
    };
  },
  components: {},

  watch: {},

  created() {
    this.getTotal()
    this.initData(this.nowPage, this.pageSize);
  },

  mounted() {},

  methods: {
    // 获取岗位个数
    async getTotal() {
      let res = await getCourseTotal();
      this.total = res.total
      debugger
    },

    // 数据初始化
    async initData(nowPage, pageSize) {
      let params = {
        nowPage,
        pageSize,
      };
      this.courseList = await getCourseList(params);
      debugger;
    },

    toCourseById(courseId) {
      let query = {
        courseId: courseId,
      };
      this.$router.push({
        path: "/courseDetail",
        query: query,
      });
    },

    toCourse() {
      this.$router.push("/course");
    },

    // 当前页改变 nowPage（改变后的页数）
    changePage(nowPage) {},
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
$courseColor: #6b7484;
#course-list-wrapper {
  padding: 0rem 2rem 1rem;
  .course-wrapper {
    cursor: pointer;
    margin: 1rem 0.5rem;
    padding: 1rem;
    background-color: $white;
    transition: transform 0.25s;
    -webkit-transition: transform 0.25s;
    &:hover {
      position: relative;
      transform: translate(-4px, -6px);
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    }
    .course-detail-box {
      .course-title {
        text-align: center;
        @extend .margin;
        @include more-text;
        line-height: 2.5rem;
      }
      .course-detail {
        @include more-text(4);
        margin-bottom: 2rem;
        padding: 0 1rem;
        text-align: left;
        color: $courseColor;
        text-indent: 1rem;
      }
      .course-info {
        color: $courseColor;
      }
    }
  }
  .course-list-pagination {
    text-align: right;
    margin: 2rem 0 1rem;
  }
  .course-list-pagination >>> .btn-prev,
  .course-list-pagination >>> .btn-next,
  .course-list-pagination >>> .el-pager li {
    background-color: $white;
  }
  .course-list-pagination >>> .el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
}
</style>
