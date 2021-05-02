<!-- 创意项目 -->
<template>
  <div style="background-color: #f4f4f4">
    <div style="margin-bottom: 1rem">
      <project-filter
        ref="proFilter"
        @to-filter="toFilter"
        @to-search="toSearch"
      ></project-filter>
    </div>
    <!-- <div style="background-color: #f4f4f4; height: 25px"></div> -->
    <div>
      <project-list ref="proList"></project-list>
    </div>
  </div>
</template>

<script>
import ProjectFilter from "./components/ProjectFilter.vue";
import ProjectList from "./components/ProjectList.vue";
import { getProjectList,getProjectListByKey } from "@/api/project.js";
export default {
  name: "Project",
  data() {
    return {
      field: [],
      phase: [],
      projectList: [],
    };
  },
  components: {
    ProjectFilter,
    ProjectList,
  },

  watch: {},

  created() {
    
  },
  mounted() {
    let params = {
      financing: -1,
      field: 0,
      phase: 0,
    };
    this.toFilter(params);
  },

  methods: {
    async toFilter() {
      let pageSize = this.$refs.proList.pageSize;
      let nowPage = this.$refs.proList.nowPage;
      let params = {
        ...arguments[0],
        pageSize,
        nowPage,
      };
      debugger;
      let res = await getProjectList(params);
      this.$refs.proList.projectList = res.list;
      this.$refs.proList.total = res.total;
      debugger;
    },
    async toSearch(key) {
      let keywords = key
      let res = await getProjectListByKey({ keywords });
      debugger
      this.$refs.proList.projectList = res;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
