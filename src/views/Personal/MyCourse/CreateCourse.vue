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
          <el-form-item label="所属组织：" prop="unit">
            <el-input
              v-model="courseForm.unit"
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
        <!-- 课程表单 end -->
        <div class="button-wrapper">
          <el-button type="primary" @click="toPublish">{{ btnText }}</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseDetail, createCourse, updateCourse } from "@/api/course";
import { mapGetters } from "vuex";
export default {
  name: "CreateCourse",
  data() {
    return {
      isCreate: true, // 是否为新建
      btnText: "发布",
      courseId: "",
      userId: 0,
      courseForm: {
        id: "",
        name: "Node.JS-黑马程序员",
        author: "黑马程序员",
        unit: "黑马程序员",
        link: "https://www.bilibili.com/video/BV1Ns411N7HU?p=1",
        abstract: `Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
        Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效。
        Node.js 的包管理器 npm,是全球最大的开源库生态系统。
        此视频教程为黑马node.js视频（最优入门视频）`,
      },
      courseRule: {
        name: [
          { required: true, message: "请输入课程名称", trigger: "blur" },
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
        unit: [{ required: true, message: "请输入所属组织", trigger: "blur" }],
        link: [{ required: true, message: "请输入课程链接", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入课程简介", trigger: "blur" },
        ],
      },
    };
  },
  components: {},

  watch: {},

  computed: {
    ...mapGetters(["userInfo"]),
  },
  
  created() {
    this.userId = this.userInfo.id;
    if (this.$route.query.courseId) {
      this.courseId = this.$route.query.courseId;
      this.isCreate = false;
      this.btnText = "更新";
      this.initData();
    } else {
      this.isCreate = true;
      this.btnText = "发布";
    }
  },

  methods: {
    // 初始化项目数据
    async initData() {
      let res = await getCourseDetail({ courseId: this.courseId });
      debugger;
      if (res.length > 0) {
        this.courseForm = res[0];
      }
    },

    // 发布
    toPublish() {
      this.$refs["newCourse"].validate(async (valid) => {
        if (valid) {
          let params = {};
          let res = [];
          // 发布
          if (this.btnText === "发布") {
            params = {
              userId: this.userId,
              ...this.courseForm,
            };
            res = await createCourse(params);
            debugger;
          } else {
            params = {
              userId: this.userId,
              courseId: this.courseId,
              link: this.courseForm.link,
              abstract: this.courseForm.abstract,
            };
            // 更新
            params.courseId = this.courseId;
            res = await updateCourse(params);
            debugger;
          }
          if (res.success) {
            let route = {
              path: "/courseDetail",
              query: {
                courseId: this.courseId || res.id,
              },
            };
            this.$router.replace(route);
          }
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
