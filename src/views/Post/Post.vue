<!-- 优质岗位 -->
<template>
  <div id="post-wrapper">
    <div class="f-container post-container">
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          v-for="(post, index) in postList"
          :key="index"
        >
          <div class="post-item" @click="toPostDetail(post.id)">
            <div class="item-header">
              <h2 v-text="post.name"></h2>
              <p class="price-box">
                月薪
                <span v-text="post.price[0]"></span> -
                <span v-text="post.price[1]"></span>
              </p>
            </div>
            <div class="item-content">
              <p>
                <span v-text="post.company"></span>
                <span v-text="post.scale[0]"></span>-
                <span v-text="post.scale[1]"></span>
              </p>
              <p>
                <span v-text="post.user"></span>
                <span v-text="post.address"></span>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="post-list-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="3"
        :pager-count="5"
        :total="postList.length"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      postList: [
        {
          id: "001",
          name: "WEB前端开发", // 岗位名称
          price: ["8k", "12k"], //薪资范围
          company: "稀里哗啦", //公司名
          scale: [100, 200], // 公司规模
          user: "HR姓名", // 发布者
          address: "上海 洋浦", //工作地址
        },
        {
          id: "002",
          name: " Java开发工程师",
          price: ["8k", "12k"],
          company: "稀里哗啦",
          scale: [100, 200],
          user: "HR姓名",
          address: "上海 洋浦",
        },
        {
          id: "003",
          name: "测试工程师",
          price: ["8k", "12k"],
          company: "稀里哗啦",
          scale: [100, 200],
          user: "HR姓名",
          address: "上海 洋浦",
        },
        {
          id: "004",
          name: "运维工程师",
          price: ["8k", "12k"],
          company: "稀里哗啦",
          scale: [100, 200],
          user: "HR姓名",
          address: "上海 洋浦",
        },
        {
          id: "005",
          name: "UI设计师",
          price: ["8k", "12k"],
          company: "稀里哗啦",
          scale: [100, 200],
          user: "HR姓名",
          address: "上海 洋浦",
        },
        {
          id: "006",
          name: "WEB前端开发",
          price: ["8k", "12k"],
          company: "稀里哗啦",
          scale: [100, 200],
          user: "HR姓名",
          address: "上海 洋浦",
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {},

  methods: {
    toPostDetail(postId) {
      let route = {
        path: "/postDetail",
        query: {
          postId: postId,
        },
      };
      this.$router.push(route);
    },
    // 当前页改变 nowPage（改变后的页数）
    changePage(nowPage) {
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#post-wrapper {
  background-color: $darkenWhite;
  .post-container {
    padding: 1rem 0;
    .post-item {
      background-color: $white;
      margin: 0.5rem;
      padding: 1.2rem;
      cursor: pointer;
      transition: transform 0.25s;
      -webkit-transition: transform 0.25s;
      &:hover {
        position: relative;
        transform: translate(-3px, -5px);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
      }
      .item-header {
        h2 {
          display: inline-block;
          font-size: 1.2rem;
        }
        .price-box {
          float: right;
          display: inline-block;
          font-size: 1.2rem;
          margin-top: 0.9rem;
          color: $activeColor;
        }
      }
    }
    .post-list-pagination {
    text-align: right;
    margin: 2rem 0 1rem;
  }
  .post-list-pagination >>>.btn-prev,
  .post-list-pagination >>>.btn-next,
  .post-list-pagination >>>.el-pager li {
    background-color: $white;
  }
  .post-list-pagination >>>.el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
  }
}
</style>
