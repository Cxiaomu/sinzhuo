<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperImg" :key="item.id">
          <img class="swiper-img" :src="item.url" />
          <!-- <el-image :src="item.url" :fit="fit" :lazy="false"></el-image> -->
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";
export default {
  name: "SSwiper",
  data() {
    return {
      swiperImg: [
        {
          id: 1,
          url: require("@/assets/img/banner/banner1.jpg"),
        },
        {
          id: 2,
          url: require("@/assets/img/banner/banner2.jpg"),
        },
        {
          id: 3,
          url: require("@/assets/img/banner/banner3.jpg"),
        },
        {
          id: 4,
          url: require("@/assets/img/banner/banner4.jpg"),
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.initSwiper();
  },

  methods: {
    //初始化swiper
    initSwiper() {
      const swiper = new Swiper(".swiper-container", {
        autoplay: {
          delay: 3000, //3秒切换一次
        },
        loop: true,
        speed: 300,
        grabCursor: true, //鼠标悬停小手
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 4, //分页器个数
        },
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.swiper-container {
width: 100%;
  background-color: #ffffff;
  --swiper-theme-color: #fff;
  --swiper-pagination-color: #c2e9fb;
  .swiper-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>