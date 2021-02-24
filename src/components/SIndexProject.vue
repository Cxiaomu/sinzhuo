<template>
  <div>
    <s-index-item :title="title" :bgColor="bgColor" :detail="detail">
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
                  <div class="project-img-box" ref="imgBox">
                    <img class="project-img" :src="project.imgUrl" />
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
                  <div class="project-detail-box" ref="detailBox">
                    <h3 class="project-title" v-text="project.name" @click="toProjectById(project.id)"></h3>
                    <p class="project-detail" v-text="project.detail"></p>
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
export default {
  name: "SIndexProject",
  data() {
    return {
      title: "创意项目",
      detail: "在万物之间，发现新的连结。",
      bgColor: "#f4f4f4",
      projectList: [
        {
          id: "001",
          name: "航空巴拉巴拉巴拉案例",
          imgUrl: require("../assets/img/project/1-project.jpg"),
          detail: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          label: ["制造业", "航天航空"],
        },
        {
          id: "002",
          name: "航空巴拉",
          imgUrl: require("../assets/img/project/2-project.jpg"),
          detail: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          label: ["制造业", "航天航空"],
        },
        {
          id: "003",
          name: "航空巴拉巴拉巴拉案例dscvx",
          imgUrl: require("../assets/img/project/3-project.jpg"),
          detail: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          label: ["制造业", "航天航空"],
        },
        {
          id: "004",
          name: "航空巴拉巴拉巴拉案例吃的饭DVD",
          imgUrl: require("../assets/img/project/4-project.jpg"),
          detail: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          label: ["制造业", "航天航空"],
        },
        {
          id: "005",
          name: "航空巴拉巴拉巴拉",
          imgUrl: require("../assets/img/project/5-project.jpg"),
          detail: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          label: ["制造业", "航天航空"],
        },
      ],
    };
  },
  components: { SIndexItem },

  watch: {},

  created() {},

  mounted() {
    this.setHeight();
  },

  methods: {
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
      let query  = {
        id: id
      }
      this.$router.push({
        path: '/project',
        query: query
      })
    }
  },
};
</script>

<style scoped lang="scss">
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
.project-wrapper {
  text-align: left;
  margin: 1rem 1.8rem;
  padding: 1.5rem;
  background-color: #fff;
  transition: transform 0.25s;
  -webkit-transition: transform 0.25s;
  &:hover {
    position: relative;
    transform: translate(-3px,-5px);
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
        @extend .more-text;
      }
      .project-detail {
        @extend .margin;
        @extend .more-text;
        -webkit-line-clamp: 4;
      }
    }
  }
}
</style>
