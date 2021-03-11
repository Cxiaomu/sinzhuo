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
              <h3 v-text="project.name" class="project-title"></h3>
              <p class="more-text">
                进度：<span v-text="project.phase"></span>
              </p>
              <p class="more-text">
                领域：<span v-text="project.field"></span>
              </p>
              <p v-if="project.financing">需要融资</p>
              <p v-else>暂不融资</p>
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
              <p class="new-text">创建项目</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyProjectList from "./components/MyProjectList.vue";
import { getProjectField, getProjectPhase } from "@/api/getJson.js";
export default {
  name: "MyProject",
  data() {
    return {
      styleObj: {
        height: "",
      },
      projectList: [
        //处理后的项目列表
        {
          id: "1",
          name: "航空巴拉巴拉巴拉",
          phase: "001",
          field: "001",
          financing: true,
        },
        {
          id: "2",
          name: "航空",
          field: "002",
          phase: "002",
          financing: false,
        },
        {
          id: "3",
          name: "航空巴拉巴拉巴拉案例",
          field: "003",
          phase: "003",
          financing: true,
        },
        {
          id: "4",
          name: "航空巴拉",
          field: "004",
          phase: "004",
          financing: false,
        },
        {
          id: "5",
          name: "航空巴拉巴拉巴拉案例",
          field: "005",
          phase: "005",
          financing: true,
        },
      ],
    };
  },
  components: { MyProjectList },

  watch: {},

  created() {
    this.handleProject();
  },
  mounted() {
    this.setNewCardHeigh();
    window.addEventListener("resize", this.setNewCardHeight);
  },
  methods: {
    setNewCardHeigh() {
      this.styleObj.height = this.$refs.projectCard[0].clientHeight - 21 + "px";
    },
    async handleProject() {
      let phase = await getProjectPhase(this);
      let field = await getProjectField(this);
      if (phase && field) {
        this.projectList.forEach((item) => {
          // 阶段id改成阶段名称
          phase.forEach((phaseItem) => {
            if (item.phase === phaseItem.id) {
              item.phase = phaseItem.name;
            }
          });
          // 项目领域id改成领域名称
          field.forEach((fieldItem) => {
            if (item.field === fieldItem.id) {
              item.field = fieldItem.name;
            }
          });
        });
      }
    },
    // 编辑
    toEdit(projectId) {
      let route = {
        path: "/createProject",
        query: {
          projectId: projectId,
        },
      };
      this.$router.push(route)
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
@import '@/styles/global.scss';
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
