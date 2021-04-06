<!-- 创意项目 -->
<template>
  <div style="background-color: #f4f4f4;">
    <div style="margin-bottom: 1rem">
      <project-filter ref="proFilter" @getField="getField"></project-filter>
    </div>
    <!-- <div style="background-color: #f4f4f4; height: 25px"></div> -->
    <div>
      <project-list ref="proList" :field="field" :phase="phase"></project-list>
    </div>
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
      phase: []
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
    // 获取所属领域并传递给projectList
    getField(field, phase) {
      this.field = field;
      this.phase = phase;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
