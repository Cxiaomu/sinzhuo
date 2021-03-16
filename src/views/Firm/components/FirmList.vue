<template>
  <div id="firm-list-wrapper" class="content-wrapper">
    <el-table
    style="width: 100%"
      :data="firmList"
      :header-cell-style="{ background: '#2ea1d6', color: '#fff' }"
      @row-click="toFirmDetail"
    >
      <el-table-column v-for="(column, index) in columns" :key="index" align="center" :label="column.title"> 
        <template slot-scope="scope">
          <div v-if="column.prop === 'handle'">
            <el-button type="text" @click="toFirmDetail(scope.row)">查看更多</el-button>
          </div>
          <div v-else>
            <span v-text="scope.row[column.prop]" :class="column.styleClass"></span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="firm-list-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="3"
        :pager-count="5"
        :total="firmList.length"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirmList",
  data() {
    return {
      columns: [{
          title: "公司注册编号",
          prop: "id",
          styleClass: "on-line"
        },

        {
          title: "公司名称",
          prop: "name",
          styleClass: "on-line"
        },
        {
          title: "法人",
          prop: "own",
          styleClass: "on-line"
        },
        {
          title: "经营领域",
          prop: "field",
          styleClass: "on-line"
        },
        {
          title: "操作",
          prop: "handle",
          styleClass: "on-line"
        }
      ],
      constFirmList: [], // 请求的企业列表
      firmList: [
        //处理后的企业列表
        {
          id: "001",
          name: "v规划布局",
          own: "me",
          field: "001"
        },
        {
          id: "002",
          name: "v规划布局sdf",
          own: "mewo",
          field: "002"
        },
        {
          id: "003",
          name: "v规划布局",
          own: "me",
          field: "003"
        },
        {
          id: "004",
          name: "v规划布局",
          own: "me",
          field: "004"
        }
      ],
    };
  },
  props: {
    field: {
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
          this.firmList.forEach((item) => {
            val.forEach((field) => {
              if (field.id == item.field) {
                item.field = field.name;
              }
            });
          });
        }
      },
    }
  },

  created() {},

  methods: {
    // 前往企业详情页
    toFirmDetail(rowData) {
      this.$router.push({
        path: "/firmDetail",
        query: {
          firmId: rowData.id,
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
#firm-list-wrapper {
  padding: 0rem 2rem 1rem;
  .firm-img {
    width: 100%;
    height: 100%;
    line-height: 100%;
    vertical-align: middle;
  }
  .on-line {
    @include more-text;
  }
  .firm-list-pagination {
    text-align: right;
    margin: 2rem 0 1rem;
  }
  .firm-list-pagination >>>.el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
}
</style>
