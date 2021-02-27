<template>
  <div>
    <s-index-item :title="title" :bgColor="bgColor" :detail="detail">
      <template v-slot:index-item-content>
        <el-row>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="6"
            v-for="post in postList"
            :key="post.id"
          >
            <div class="post-wrapper">
              <div class="post-img-box" @click="toPostById(post.id)">
                <img :src="post.imgUrl" class="post-img" />
              </div>
              <div class="post-detail-box">
                <h3 class="post-title" v-text="post.name"></h3>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
      <template v-slot:inde-item-more>
        <el-button 
        type="primary" 
        class="more-button"
        @click="toPost"
        plain>查看更多</el-button>
      </template>
    </s-index-item>
  </div>
</template>

<script>
import SIndexItem from "./SIndexItem.vue";
export default {
  name: "SIndexPost",
  data() {
    return {
      title: "优质岗位",
      detail: "用实践，将理论推想到极致。",
      bgColor: "#ffffff",
      postList: [
        {
          id: "001",
          imgUrl: require("../assets/img/post/1-web.jpg"),
          name: "WEB前端开发工程师",
        },
        {
          id: "002",
          imgUrl: require("../assets/img/post/2-java.jpg"),
          name: "Java工程师",
        },
        {
          id: "003",
          imgUrl: require("../assets/img/post/3-ios.jpg"),
          name: "移动端开发工程师",
        },
        {
          id: "004",
          imgUrl: require("../assets/img/post/4-count.jpg"),
          name: "算法工程师",
        },
        {
          id: "005",
          imgUrl: require("../assets/img/post/5-bigData.jpg"),
          name: "大数据开发",
        },
        {
          id: "006",
          imgUrl: require("../assets/img/post/6-php.jpg"),
          name: "PHP开发工程师",
        },
        {
          id: "007",
          imgUrl: require("../assets/img/post/7-UI.jpg"),
          name: "UI设计师",
        },
        {
          id: "008",
          imgUrl: require("../assets/img/post/8-test.jpg"),
          name: "测试工程师",
        },
        {
          id: "009",
          imgUrl: require("../assets/img/post/9-improve.jpg"),
          name: "运维工程师",
        },
      ],
    };
  },
  components: { SIndexItem },

  watch: {},

  created() {},

  mounted() {},

  methods: {
    toPostById(id) {
      let query  = {
        id: id
      }
      this.$router.push({
        path: '/post',
        query: query
      })
    },

    toPost() {
      this.$router.push('/post')
    }
  },
};
</script>

<style scoped lang="scss">
.margin {
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
}
.more-text {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.post-wrapper {
  margin: 1rem;
  margin-bottom: 2rem;
  border: solid 2px #fff;
  &:hover {
    background-color: #2ea1d6;
    color: #fff;
    border-color: #2ea1d6;
  }
  .post-img-box {
    overflow: hidden;
    cursor: pointer;
    .post-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.4s;
      -webkit-transition: transform 1.4s;
      &:hover {
        transform: scale(1.2)
      }
    }
  }
  .post-detail-box {
    .post-title {
      @extend .margin;
      @extend .more-text;
      line-height: 2.5rem;
    }
  }
}
</style>
