<template>
  <div class="index-item-wrapper" :style="{'background': bgColor ? bgColor:'#fff'}">
    <div class="index-item-container">
      <h2 class="index-item-title" v-text="title"></h2>
      <p class="index-item-detail" v-text="detail"></p>
      <div class="index-item-line"></div>
      <div>
        <slot name="index-item-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SIndexItem",
  data() {
    return { 
    }
  },
  props: {
      title: String,
      detail: String,
      bgColor: String,
  },
  components: { },

  watch: { },

  created() { },

  methods: { },

}
</script>

<style scoped lang="scss">

</style>
