<!-- 创意项目 -->
<template>
  <div>
    <div>
      <project-filter ref="proFilter" @getField="getField"></project-filter>
    </div>
    <!-- <div style="background-color: #f4f4f4; height: 25px"></div> -->
    <div>
      <project-list ref="proList" :field="field"></project-list>
    </div>

    创意项目
  </div>
</template>

<script>
import ProjectFilter from "./components/ProjectFilter.vue";
import ProjectList from "./components/ProjectList.vue";
export default {
  name: "Project",
  data() {
    return {
      field: [],
    };
  },
  components: {
    ProjectFilter,
    ProjectList,
  },

  watch: {},

  created() {},
  mounted() {},

  methods: {
    toSearch() {
      // 上传事件 获取关键字、筛选类型
    },
    getField() {
      this.field = this.$refs.proFilter.filterOptions[2].optionList;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
