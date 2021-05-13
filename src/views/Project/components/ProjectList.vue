<template>
  <div id="project-list-wrapper" class="content-wrapper">
    <el-table
      style="width: 100%"
      :data="projectList"
      :header-cell-style="{ background: '#2ea1d6', color: '#fff' }"
      @row-click="toProjectDetail"
    >
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        align="center"
        :label="column.title"
      >
        <template slot-scope="scope">
          <div v-if="column.prop === 'financing'">
            <span v-if="scope.row.financing">是</span>
            <span v-else>否</span>
          </div>
          <div v-else>
            <span
              v-text="scope.row[column.prop]"
              :class="column.styleClass"
            ></span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="project-list-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :pager-count="5"
        :total="total"
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
      pageSize: 6,
      nowPage: 1,
      total: 0,
      columns: [
        {
          title: "项目",
          prop: "name",
          styleClass: "on-line",
        },

        {
          title: "项目概述",
          prop: "abstract",
          styleClass: "more-text-3",
        },
        {
          title: "所属领域",
          prop: "field",
          styleClass: "more-text-3",
        },
        // {
        //   title: "负责人",
        //   prop: "author",
        //   styleClass: "oneline"
        // },
        {
          title: "项目阶段",
          prop: "phase",
          styleClass: "oneline",
        },
        {
          title: "需要融资",
          prop: "financing",
          styleClass: "oneline",
        },
      ],
      constProjectList: [], // 请求的项目列表
      projectList: [
        //处理后的项目列表
        {
          id: 0,
          name: "",
          abstract: "",
          field: "",
          author: "",
          phase: "",
          financing: true,
        },
      ],
    };
  },

  components: {},

  watch: {},

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
      this.nowPage = nowPage;
      this.$emit("to-filter");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
.el-row >>> .el-col {
  text-align: center;
}
>>> .el-table__row {
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
  .project-list-pagination >>> .btn-prev,
  .project-list-pagination >>> .btn-next,
  .project-list-pagination >>> .el-pager li {
    background-color: $white;
  }
  .project-list-pagination >>> .el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
}
</style>
