<template>
  <div id="firm-filter-wrapper" class="content-wrapper">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <!-- filter title start -->
        <template slot="title">
          <el-row type="flex" justify="space-between" class="collapse-title">
            <el-col :span="18">
              <span class="filter-title">筛选</span>
            </el-col>
            <el-col :span="6">
              <div class="search-box" @click.stop="stopExpand">
                <el-input
                  placeholder="请输入关键字"
                  size="medium"
                  maxlength="10"
                  v-model="keywords"
                  class="title-input"
                >
                </el-input>
                <el-button type="primary" size="medium" @click.stop="toSearch"
                  >搜索</el-button
                >
              </div>
            </el-col>
          </el-row>
        </template>
        <!-- filter title start -->
        <!-- filter content start -->
        <div class="firm-filter-container">
          <el-row
            class="filter-item"
            v-for="filter in filterOptions"
            :key="filter.class"
          >
            <el-col :span="2">
              <span class="filter-item-title" v-text="filter.title"></span>
            </el-col>
            <el-col :span="22">
              <div
                class="filter-item-tag"
                v-for="(item, index) in filter.optionList"
                :key="index"
              >
                <span
                  :class="[
                    'item-tag',
                    { 'item-activetag': getActiveStatus(index) },
                  ]"
                  v-text="item.name"
                  @click="toFilter(index)"
                ></span>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- filter content end -->
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { getProjectField } from "@/api/getJson";
export default {
  name: "FirmFilter",
  data() {
    return {
      activeName: "1",
      keywords: "",
      isField: 0, // 所属领域激活索引
      filterOptions: [
        {
          title: "所属领域",
          class: "field",
          optionList: [
            {
              id: "",
              name: "",
              type: "",
            },
          ],
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {
    this.getPorjectConfig();
  },
  mounted() {
    // 监听所属领域数据，取得则上传参数与事件
    this.$watch('filterOptions', () => {
      let field = this.filterOptions[0].optionList;
        if (field) {
          this.$emit('getField', field)
        }
      }, {
        deep: true
      })
  },
  methods: {
    async getPorjectConfig() {
      // 项目领域
      let resField = await getProjectField(this);
      if (resField) {
        this.filterOptions[0].optionList = resField;
      }
    },

    // 激活状态的span
    getActiveStatus(index) {
        return index == this.isField;
    },

    // 防止点击搜索、输入框折叠面板展开/收缩
    stopExpand() {}, 

    // 关键字搜索
    toSearch() {},

    // 点击span进行切换、过滤
    toFilter(index) {
      debugger
        this.isField = index;
      // 上传参数过滤
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
#firm-filter-wrapper >>> .el-collapse-item__content {
  padding-bottom: 0;
}
.collapse-title {
  width: 95%;
  margin: 1rem auto;
}
.tag-text {
  font-size: 0.9rem;
}
#firm-filter-wrapper {
  padding: 0rem 2rem;
  .filter-title {
    font-size: 1rem;
  }
  .search-box {
    text-align: right;
    .title-input {
      width: 70%;
    }
    button {
      background-color: $activeColor;
      color: $white;
      &:hover {
        background-color: darken($activeColor, 10%);
      }
    }
  }
  .firm-filter-container {
    border-top: 1px solid #ebeef5;
    .filter-item {
      @extend .collapse-title;
      &-title {
        font-size: 0.9rem;
        font-weight: bold;
      }
      .filter-item-tag {
        display: inline-block;
      }
    }
  }
}
</style>
