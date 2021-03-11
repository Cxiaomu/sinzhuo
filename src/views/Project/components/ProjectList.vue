<template>
  <div id="project-list-wrapper" class="content-wrapper">
    <el-table
    style="width: 100%"
      :data="projectList"
      :header-cell-style="{ background: '#2ea1d6', color: '#fff' }"
      @row-click="toProjectDetail"
    >
      <!-- <el-table-column align="center" label="项目">
        <template slot-scope="scope">
          <span v-text="scope.row.name" class="on-line"></span>
          <el-row style="vertical-align: middle;">
            <el-col :span="4">
              <el-image :src="scope.row.imgUrl" fit="cover"></el-image>
            </el-col>
            <el-col :span="20" style="vertical-align: middle;">
              <span v-text="scope.row.name" class="on-line"></span>
            </el-col>
          </el-row>
        </template>
      </el-table-column> -->
      <!-- <el-table-column align="center" label="项目概述">
        <template slot-scope="scope">
          <span v-text="scope.row.abstract" class="more-text"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="所属领域">
        <template slot-scope="scope">
          <span v-text="scope.row.field" class="more-text"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="负责人">
        <template slot-scope="scope">
          <span v-text="scope.row.author" class="on-line"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="phase" label="项目阶段">
      </el-table-column> -->
      <el-table-column v-for="(column, index) in columns" :key="index" align="center" :label="column.title"> 
        <template slot-scope="scope">
          <div v-if="column.prop === 'financing'">
            <span v-if="scope.row.financing">是</span>
            <span v-else>否</span>
          </div>
          <div v-else>
            <span v-text="scope.row[column.prop]" :class="column.styleClass"></span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="project-list-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="3"
        :pager-count="5"
        :total="projectList.length"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      columns: [{
          title: "项目",
          prop: "name",
          styleClass: "on-line"
        },

        {
          title: "项目概述",
          prop: "abstract",
          styleClass: "more-text-3"
        },
        {
          title: "所属领域",
          prop: "field",
          styleClass: "more-text-3"
        },
        {
          title: "负责人",
          prop: "author",
          styleClass: "oneline"
        },
        {
          title: "项目阶段",
          prop: "phase",
          styleClass: "oneline"
        },
        {
          title: "需要融资",
          prop: "financing",
          styleClass: "oneline"
        },
      ],
      constProjectList: [], // 请求的项目列表
      projectList: [
        //处理后的项目列表
        {
          id: "1",
          name: "航空巴拉巴拉巴拉",
          imgUrl: require("../../../assets/img/project/1-project.jpg"),
          abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          field: "001",
          author: "Cxiaomu",
          phase: "001",
          financing: true,
        },
        {
          id: "2",
          name: "航空",
          imgUrl: require("../../../assets/img/project/2-project.jpg"),
          abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。
          翡翠国际货运航空公司，中国南方航空公司，中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，
          是一家值得信赖的深圳航空货运公司。`,
          field: "002",
          author: "阿爸阿爸吧6",
          phase: "002",
          financing: true,
        },
        {
          id: "3",
          name: "航空巴拉巴拉巴拉案例",
          imgUrl: require("../../../assets/img/project/3-project.jpg"),
          abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系。`,
          field: "003",
          author: "顺丰物流有限公司承接",
          phase: "003",
          financing: true,
        },
        {
          id: "4",
          name: "航空巴拉",
          imgUrl: require("../../../assets/img/project/4-project.jpg"),
          abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
          航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
          中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
          author: "深圳市顺丰物流有限公司",
          field: "004",
          phase: "004",
          financing: true,
        },
        {
          id: "5",
          name: "航空巴拉巴拉巴拉案例",
          imgUrl: require("../../../assets/img/project/5-project.jpg"),
          abstract: `深圳市顺丰物流有限公司承接深圳至全国。`,
          author: "vggggggggg",
          field: "005",
          phase: "005",
          financing: true,
        },
      ],
    };
  },
  props: {
    field: {
      type: Array,
      default: () => [],
    },
    phase: {
      type: Array,
      default: () => [],
    }
  },
  components: {},

  watch: {
    // 监听所属领域数据
    field: {
      handler(val) {
        if (val) {
          this.projectList.forEach((item) => {
            val.forEach((field) => {
              if (field.id == item.field) {
                item.field = field.name;
              }
            });
          });
        }
      },
    },
    phase: {
      handler(val) {
        if (val) {
          this.projectList.forEach((item) => {
            val.forEach((phase) => {
              if (phase.id == item.phase) {
                item.phase = phase.name;
              }
            });
          });
        }
      },
    }
  },

  created() {},

  methods: {
    // 前往项目详情页
    toProjectDetail(rowData, columnData, event) {
      debugger;
      this.$router.push({
        path: "/projectDetail",
        query: {
          projectId: rowData.id,
        },
      });
    },
    
    // 当前页改变 nowPage（改变后的页数）
    changePage(nowPage) {
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
.el-row >>> .el-col {
  text-align: center;
}
>>>.el-table__row {
  cursor: pointer;
}
.more-text-3 {
  @include more-text(3);
}
.collapse-title {
  width: 95%;
  margin: 1rem auto;
}
.tag-text {
  font-size: 0.9rem;
}
#project-list-wrapper {
  padding: 0rem 2rem 1rem;
  .project-img {
    width: 100%;
    height: 100%;
    line-height: 100%;
    vertical-align: middle;
  }
  .on-line {
    @include more-text;
  }
  .project-list-pagination {
    text-align: right;
    margin: 2rem 0 1rem;
  }
  .project-list-pagination >>>.el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
}
</style>
