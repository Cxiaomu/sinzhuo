<template>
  <div>
    项目详情{{projectId}}
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      projectId: ''
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

</style>
