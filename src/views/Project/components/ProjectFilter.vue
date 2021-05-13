<template>
  <div id="project-filter-wrapper" class="content-wrapper">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <!-- filter title start -->
        <template slot="title">
          <el-row type="flex" justify="space-between" class="collapse-title">
            <el-col :span="12">
              <span class="filter-title">筛选</span>
            </el-col>
            <el-col :span="12">
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
        <div class="project-filter-container">
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
                    { 'item-activetag': getActiveStatus(filter.class, index) },
                  ]"
                  v-text="item.name"
                  @click="toFilter(filter.class, index)"
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
import { getProjectPhase, getProjectField } from "../../../api/home";
export default {
  name: "ProjectFilter",
  data() {
    return {
      searchData: {
        financing: -1,
        field: 0,
        phase: 0,
      },
      activeName: "1",
      keywords: "",
      isFinancing: 0, // 需要融资激活索引
      isPhase: 0, // 项目阶段激活索引
      isField: 0, // 所属领域激活索引
      filterOptions: [
        {
          title: "需要融资",
          class: "financing",
          optionList: [
            {
              id: "000",
              name: "全部",
              type: "000",
            },
            {
              id: "001",
              name: "是",
              type: "000",
            },
            {
              id: "002",
              name: "否",
              type: "000",
            },
          ],
        },
        {
          title: "项目阶段",
          class: "phase",
          optionList: [],
        },
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
  mounted() {},
  methods: {
    async getPorjectConfig() {
      // 项目阶段
      let resPhase = await getProjectPhase();
      if (resPhase) {
        this.filterOptions[1].optionList = resPhase.data;
      }
      // 项目领域
      let resField = await getProjectField();
      if (resField) {
        this.filterOptions[2].optionList = resField.data;
      }
    },

    // 激活状态的span
    getActiveStatus(type, index) {
      if (type == "financing") {
        return index == this.isFinancing;
      } else if (type == "phase") {
        return index == this.isPhase;
      } else if (type == "field") {
        return index == this.isField;
      }
    },

    // 防止点击搜索、输入框折叠面板展开/收缩
    stopExpand() {},

    // 关键字搜索
    toSearch() {
      debugger;
      this.$emit("to-search", this.keywords);
    },

    // 点击span进行切换、过滤
    toFilter(type, index) {
      if (type == "financing") {
        this.isFinancing = index;
        let data = index;
        debugger;
        switch (index) {
          case 0:
            data = -1;
            break;
          case 1:
            data = 1;
            break;
          case 2:
            data = 0;
            break;
        }
        this.searchData.financing = data;
      } else if (type == "phase") {
        this.isPhase = index;
        this.searchData.phase = index;
      } else if (type == "field") {
        this.isField = index;
        this.searchData.field = index;
      }
      // 上传参数过滤
      this.$emit("to-filter", this.searchData);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#project-filter-wrapper >>> .el-collapse-item__content {
  padding-bottom: 0;
}
.collapse-title {
  width: 95%;
  margin: 1rem auto;
}
.tag-text {
  font-size: 0.9rem;
}
#project-filter-wrapper {
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
  .project-filter-container {
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
