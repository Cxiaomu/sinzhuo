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
      <project-list ref="proList" @to-filter="toFilter"></project-list>
    </div>
  </div>
</template>

<script>
import ProjectFilter from "./components/ProjectFilter.vue";
import ProjectList from "./components/ProjectList.vue";
import { getProjectList, getProjectListByKey } from "@/api/project.js";
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

  created() {},
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
      let searchData = this.$refs.proFilter.searchData;
      let params = {
        ...arguments[0],
        ...searchData,
        pageSize,
        nowPage,
      };
      debugger;
      let res = await getProjectList(params);
      debugger;
      this.$refs.proList.projectList = res.list;
      this.$refs.proList.total = res.total;
    },
    async toSearch(key) {
      let keywords = key;
      let res = await getProjectListByKey({ keywords });
      debugger;
      this.$refs.proList.projectList = res;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
