<!-- 发布课程 -->
<template>
  <div id="create-course-wrapper">
    <div class="f-container create-course-container">
      <div class="f-container">
        <!-- 课程表单 start -->
        <el-form
          :model="courseForm"
          :rules="courseRule"
          ref="newCourse"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="课程名称：" prop="name">
            <el-input
              v-model="courseForm.name"
              class="course-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="作者：" prop="author">
            <el-input
              v-model="courseForm.author"
              class="course-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="所属组织：" prop="organization">
            <el-input
              v-model="courseForm.organization"
              class="course-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>

          <el-form-item label="课程链接：" prop="link">
            <el-input v-model="courseForm.link" class="course-name"></el-input>
          </el-form-item>
          <el-form-item label="课程简介：" prop="abstract">
            <el-input
              type="textarea"
              :rows="10"
              v-model="courseForm.abstract"
            ></el-input>
          </el-form-item>
        </el-form>
        <!-- 岗位表单 end -->
        <div class="button-wrapper">
          <el-button type="primary" @click="toPublish">发布</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCourse",
  data() {
    return {
      isCreate: true, // 是否为新建
      courseId: "",
      courseForm: {
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
      courseRule: {
        name: [
          { required: true, message: "请输入岗位名称", trigger: "blur" },
          {
            min: 2,
            message: "长度至少为 2 个字符",
            trigger: "blur",
          },
        ],
        author: [
          { required: true, message: "请输入作者", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        organization: [
          { required: true, message: "请输入所属组织", trigger: "blur" },
        ],
        link: [{ required: true, message: "请输入课程链接", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入课程简介", trigger: "blur" },
        ],
      },
    };
  },
  components: {},

  watch: {},

  created() {
    if (this.$route.query.courseId) {
      this.courseId = this.$route.query.courseId;
      this.isCreate = false;
    } else {
      this.isCreate = true;
    }
  },

  methods: {
    // 发布
    toPublish() {
      this.$refs["newCourse"].validate((valid) => {
        if (valid) {
          this.courseForm.time = new Date().getTime();
          // 请求接口
          let route = {
            path: "/courseDetail",
            query: {
              courseId: "0010",
            },
          };
          this.$router.replace(route);
        }
      });
    },

    // 退出
    toQuite() {
      this.$router.replace("/myCourse");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
>>> .el-radio-group {
  line-height: 40px;
}
#create-course-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .create-course-container {
    padding: 2rem 0;
    background-color: $white;
  }
}
.course-name {
  width: 50%;
}
</style>
