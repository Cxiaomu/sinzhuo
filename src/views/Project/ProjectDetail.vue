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
              <p>需要融资： 
                <span v-if="projectInfo.financing">是</span>
                <span else>否</span>
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
              <p>联系邮箱：<span v-text="author.email"></span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      projectId: "",
      author: {
        name: "作者名字",
        tel: "17860618426",
        email: "cxiaomu_la@163.com",
      },
      projectInfo: {
        id: "001",
        name: "航空巴拉巴拉巴拉案例",
        imgUrl: require("@/assets/img/project/1-project.jpg"),
        field: "住宿和餐饮业",
        phase: "项目规划",
        financing: false,
        time: "2020-09-21",
        label: ["制造业", "航天航空"],
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
    this.projectId = this.$route.query.projectId;
  },

  methods: {},
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
      }
    }
  }
}
</style>
