<template>
  <div id="project-detail-wrapper">
    <div class="f-container">
      项目详情
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      projectId: '',
      author: {
        name: '作者名字',
        tel: '17860618426',
        email: 'cxiaomu_la@163.com'
      },
      projectInfo: {
        id: "001",
        name: "航空巴拉巴拉巴拉案例",
        imgUrl: require("@/assets/img/project/1-project.jpg"),
        field: "住宿和餐饮业",
        phase: "项目规划",
        financing: false,
        label: ["制造业", "航天航空"],
        abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
        航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，
        中国国际航空公司，中国东方航空公司订有专用舱位，能确保到货时间，是一家值得信赖的深圳航空货运公司。`,
      },
    }
  },
  components: { },

  watch: { },

  created() {
    this.projectId = this.$route.query.projectId
  },

  methods: { },

}
</script>

<style scoped lang="scss">
#project-detail-wrapper {

}
</style>
