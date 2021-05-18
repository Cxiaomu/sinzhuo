<template>
  <div>
    <s-index-item
      :title="title"
      :bgColor="bgColor"
      :detail="detail"
      @toMore="toProject"
    >
      <template v-slot:index-item-content>
        <el-row>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            v-for="project in projectList"
            :key="project.id"
          >
            <div class="project-wrapper">
              <el-row :gutter="12" class="project-container">
                <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                  <div
                    class="project-img-box"
                    ref="imgBox"
                    @click="toProjectById(project.id)"
                  >
                    <img class="project-img" :src="project.imgUrl" />
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
                  <div class="project-detail-box" ref="detailBox">
                    <h3
                      class="project-title"
                      v-text="project.name"
                      @click="toProjectById(project.id)"
                    ></h3>
                    <p class="project-detail" v-text="project.abstract"></p>
                    <!-- {{ project.detail }} -->
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </template>
    </s-index-item>
  </div>
</template>

<script>
import SIndexItem from "./SIndexItem.vue";
import { getProjectTop } from "@/api/project";
export default {
  name: "SIndexProject",
  data() {
    return {
      title: "创意项目",
      detail: "在万物之间，发现新的连结。",
      bgColor: "#f4f4f4",
      projectList: [
        {
          id: "",
          name: "",
          imgUrl: "",
          detail: "",
          label: [],
        },
      ],
    };
  },
  components: { SIndexItem },

  watch: {},

  created() {
    this.initData();
  },

  mounted() {
    this.setHeight();
  },

  methods: {
    async initData() {
      let res = await getProjectTop();
      debugger;
      this.projectList = res;
    },
    // 设置项目简介盒子高度
    setHeight() {
      for (let i = 0; i < this.$refs.imgBox.length; i++) {
        let height = (this.$refs.imgBox[i].clientWidth * 2) / 3 + "px";
        this.$refs.imgBox[i].style.height = height;
        this.$refs.detailBox[i].style.height = height;
      }
      console.log();
    },

    // 前往项目详情页
    toProjectById(id) {
      let query = {
        projectId: id,
      };
      this.$router.push({
        path: "/projectDetail",
        query: query,
      });
    },

    // 前往项目目录
    toProject() {
      this.$router.push("/project");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
.project-wrapper {
  text-align: left;
  margin: 1rem;
  padding: 1.5rem;
  background-color: $white;
  transition: transform 0.25s;
  -webkit-transition: transform 0.25s;
  &:hover {
    position: relative;
    transform: translate(-3px, -5px);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
  .project-container {
    .project-img-box {
      overflow: hidden;
      cursor: pointer;
      .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .project-detail-box {
      overflow: hidden;
      .project-title {
        cursor: pointer;
        @extend .margin;
        @include more-text;
        &:hover {
          color: #2ea1d6;
        }
      }
      .project-detail {
        @extend .margin;
        @include more-text(4);
        color: #6b7484;
      }
    }
  }
}
</style>
