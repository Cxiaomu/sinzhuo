<!-- 我的项目  -->
<template>
  <div>
    <!-- <my-project-list></my-project-list> -->
    <el-row>
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        v-for="project in projectList"
        :key="project.id"
      >
        <div class="project-item-wrapper" ref="projectCard">
          <el-card shadow="hover">
            <div>
              <h3
                v-text="project.name"
                class="project-title"
                @click="toProjectById(project.id)"
              ></h3>
              <p class="more-text">
                进度：<span v-text="project.phase"></span>
              </p>
              <p class="more-text">
                领域：<span v-text="project.field"></span>
              </p>
              <p class="more-text">
                需要融资：<span v-if="project.financing">是</span>
                <span v-else>否</span>
              </p>
            </div>
            <div style="text-align: right">
              <el-button type="text" @click="toEdit(project.id)"
                >编辑</el-button
              >
              <el-button type="text" @click="toDelete(project.id)"
                >删除</el-button
              >
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <div class="project-item-wrapper" @click="toCreateProject">
          <el-card shadow="hover" ref="newCard" :body-style="styleObj">
            <div class="newIcon-box">
              <span class="iconfont iconxinjian"></span>
              <p class="new-text">发布项目</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyProjectList from "./components/MyProjectList.vue";
import { getMyProject } from "@/api/project";
export default {
  name: "MyProject",
  data() {
    return {
      styleObj: {
        height: "",
      },
      projectList: [
        {
          id: "",
          name: "",
          phase: "",
          field: "",
          financing: true,
        },
      ],
    };
  },

  components: { MyProjectList },

  watch: {},

  created() {
    this.initData();
  },

  mounted() {
    this.setNewCardHeigh();
    window.addEventListener("resize", this.setNewCardHeight);
  },
  methods: {
    // 设置卡片高度
    setNewCardHeigh() {
      this.styleObj.height = this.$refs.projectCard[0].clientHeight - 21 + "px";
    },

    // 初始化项目列表
    async initData() {
      let userId = localStorage.getItem("userId");
      let res = await getMyProject({ userId: 1 });
      debugger;
      this.projectList = res;
    },

    // 前往项目详情
    toProjectById(id) {
      let query = {
        projectId: id,
      };
      this.$router.push({
        path: "/projectDetail",
        query: query,
      });
    },

    // 编辑
    toEdit(projectId) {
      let route = {
        path: "/createProject",
        query: {
          projectId: projectId,
        },
      };
      this.$router.push(route);
      debugger;
    },

    // 删除
    toDelete(projectId) {
      debugger;
    },

    // 新建项目
    toCreateProject() {
      this.$router.push("/createProject");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
>>> .el-card__body {
  padding: 10px 20px;
}
.project-item-wrapper {
  margin: 0.5rem;
  .project-title {
    @extend .margin;
    @include more-text;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $activeColor;
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
