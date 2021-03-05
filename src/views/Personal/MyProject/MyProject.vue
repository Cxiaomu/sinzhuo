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
        <div class="project-item-wrapper">
          <el-card shadow="hover">
            <div>
              <h3 v-text="project.name" class="project-title"></h3>
              <p>进度：<span v-text="project.phase"></span></p>
              <p>领域：<span v-text="project.field"></span></p>
              <p v-if="project.financing">需要融资</p>
              <p v-else>暂不融资</p>
            </div>
            <div style="text-align: right">
              <el-button type="text" @click="toEdit(project.id)">编辑</el-button>
              <el-button type="text" @click="toDelete(project.id)">删除</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6">
        <div class="project-item-wrapper">
          <el-card shadow="hover">
            <div style="text-align:center">
              <span class="iconfont iconxinjian"></span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyProjectList from "./components/MyProjectList.vue";
export default {
  name: "MyProject",
  data() {
    return {
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

  created() {},

  methods: {
    // 编辑
    toEdit(projectId) {
      debugger
    },

    // 删除
    toDelete(projectId) {
      debugger
    }
  },
};
</script>

<style scoped lang="scss">
>>> .el-card__body {
    padding: 10px 20px;
}
$activeColor: #31b4f2;
.margin {
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
}
.more-text {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.project-item-wrapper {
  margin: 0.5rem;
  .project-title {
    @extend .margin;
    @extend .more-text;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $activeColor;
    }
  }
  .iconxinjian {
    display: inline-block;
    margin: 0  auto;
    font-size: 4rem;
    color: #cccccc;
  }
}
</style>
