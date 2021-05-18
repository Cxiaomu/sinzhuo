<template>
  <div id="project-detail-wrapper">
    <div class="f-container project-detail-container">
      <div class="f-container">
        <el-row>
          <el-col :span="4">
            <el-image :src="projectInfo.imgUrl" fit="cover"></el-image>
          </el-col>
          <el-col :span="20">
            <div class="detail-title">
              <h2 v-text="projectInfo.name"></h2>
              <p>
                需要融资：
                <span v-if="projectInfo.financing">是</span>
                <span v-else>否</span>
              </p>
              <p>发布时间：<span v-text="projectInfo.time"></span></p>
            </div>
          </el-col>
        </el-row>
        <div class="detail-item">
          <h3>所属领域</h3>
          <el-divider></el-divider>
          <span
            class="item-tag item-activetag"
            v-text="projectInfo.field"
          ></span>
          <h3>项目阶段</h3>
          <el-divider></el-divider>
          <p v-text="projectInfo.phase"></p>
          <h3>项目概述</h3>
          <el-divider></el-divider>
          <p v-text="projectInfo.abstract"></p>
          <h3>合作项目</h3>
          <el-divider></el-divider>
          <ul>
            <li>
              <p>联系人：<span v-text="author.name"></span></p>
            </li>
            <li>
              <p>联系电话：<span v-text="author.tel"></span></p>
            </li>
            <li>
              <p>
                联系邮箱：<a
                  class="link-a"
                  :href="'mailto:' + author.email"
                  target="_blank"
                  >{{ author.email }}</a
                >
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectDetail } from "@/api/project";
import { formateDate } from "@/utils/ways";
export default {
  name: "ProjectDetail",
  data() {
    return {
      projectId: "",
      author: {
        name: "",
        tel: "",
        email: "",
      },
      projectInfo: {
        id: "",
        name: "",
        imgUrl: require("@/assets/img/project/1-project.jpg"),
        field: "",
        phase: "",
        financing: false,
        time: "",
        label: [],
        abstract: ``,
      },
    };
  },

  components: {},

  watch: {},

  created() {
    this.projectId = this.$route.query.projectId;
    this.initData();
  },

  methods: {
    // 初始化项目数据
    async initData() {
      let res = await getProjectDetail({ projectId: this.projectId });
      debugger;
      if (res.length > 0) {
        this.projectInfo = res[0];
        this.projectInfo.time = formateDate(
          new Date(res[0]["time"]),
          "YYYY-MM-DD"
        );
        this.author = res[1];
        debugger;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$white: #ffffff;
$darkenWhite: #f4f4f4;
#project-detail-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .project-detail-container {
    padding: 2rem 0;
    background-color: $white;
    >>> .el-row {
      padding-left: 0.8rem;
    }
    >>> .el-divider--horizontal {
      margin: 1rem 0;
    }
    .detail-title {
      padding-left: 2rem;
    }
    .detail-item {
      .item-tag {
        margin-left: 2rem;
        margin-bottom: 0rem;
        cursor: text;
      }
      h3 {
        margin-top: 2rem;
        padding-left: 0.8rem;
      }
      p {
        padding-left: 2rem;
        line-height: 1.8rem;
      }
      ul {
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        .link-a {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
