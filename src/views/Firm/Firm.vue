<!-- 高新公司 -->
<template>
  <div>
    <div>
      <firm-filter ref="firmFilter" @getField="getField"></firm-filter>
    </div>
    <div>
      <firm-list ref="firmoList" :field="field"></firm-list>
    </div>
  </div>
</template>

<script>
import FirmFilter from './components/FirmFilter.vue'
import FirmList from './components/FirmList.vue'
export default {
  name: "Firm",
  data() {
    return {
      field: []
    }
  },
  components: {FirmFilter, FirmList },

  watch: { },

  created() { },

  methods: {
    toSearch() {
      // 上传事件 获取关键字、筛选类型
    },
    // 获取所属领域并传递给projectList
    getField(field) {
      this.field = field;
    },
  },

}
</script>

<style scoped lang="scss">

</style>
