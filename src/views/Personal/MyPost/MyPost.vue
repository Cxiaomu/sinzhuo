<!-- 我的岗位  -->
<template>
  <div>
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
        <div class="post-item-wrapper" ref="postCard">
          <el-card shadow="hover">
            <div>
              <h3 v-text="post.name" class="post-title"></h3>
              <p class="price-box">
                薪资：
                <span v-text="post.price[0]"></span> -
                <span v-text="post.price[1]"></span> / 月
              </p>
              <p>
                学历：<span v-text="post.education"></span>
                <el-divider direction="vertical"></el-divider>
                经验：<span v-text="post.experience"></span>
              </p>
              <p>招聘人数：<span v-text="post.experience"></span></p>
              <p>
                <span v-text="post.company"></span>
                <el-divider direction="vertical"></el-divider>
                <span v-text="post.address"></span>
              </p>
            </div>
            <div style="text-align: right">
              <el-button type="text" @click="toEdit(post.id)">编辑</el-button>
              <el-button type="text" @click="toDelete(post.id)">删除</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <div class="post-item-wrapper" @click="toCreatePost">
          <el-card shadow="hover" ref="newCard" :body-style="styleObj">
            <div class="newIcon-box">
              <span class="iconfont iconxinjian"></span>
              <p class="new-text">创建岗位</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyPost",
  data() {
    return {
      styleObj: {
        height: "",
      },
      postList: [
        //处理后的岗位列表
        {
          id: "001",
          name: "WEB前端开发", // 岗位名称
          price: ["8k", "12k"], //薪资范围
          company: "稀里哗啦", //公司名
          education: "本科", // 学历
          experience: "不限", // 经验
          need: [10, 20], // 招聘人数
          address: "上海 洋浦", //工作地址
        },
        {
          id: "002",
          name: "Java开发工程师", // 岗位名称
          price: ["9k", "14k"], //薪资范围
          company: "稀里哗啦", //公司名
          education: "本科", // 学历
          experience: "不限", // 经验
          need: [10, 20], // 招聘人数
          address: "上海 洋浦", //工作地址
        },
        {
          id: "003",
          name: "UI设计师", // 岗位名称
          price: ["6k", "9k"], //薪资范围
          company: "稀里哗啦", //公司名
          education: "本科", // 学历
          experience: "不限", // 经验
          need: [10, 20], // 招聘人数
          address: "上海 洋浦", //工作地址
        },
        {
          id: "004",
          name: "测试工程师", // 岗位名称
          price: ["8k", "12k"], //薪资范围
          company: "稀里哗啦", //公司名
          education: "本科", // 学历
          experience: "不限", // 经验
          need: [10, 20], // 招聘人数
          address: "上海 洋浦", //工作地址
        },
        {
          id: "005",
          name: "运维工程师", // 岗位名称
          price: ["4k", "8k"], //薪资范围
          company: "稀里哗啦", //公司名
          education: "本科", // 学历
          experience: "不限", // 经验
          need: [10, 20], // 招聘人数
          address: "上海 洋浦", //工作地址
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {
    this.handlePost();
  },
  mounted() {
    this.setNewCardHeigh();
    window.addEventListener("resize", this.setNewCardHeight);
  },
  methods: {
    setNewCardHeigh() {
      this.styleObj.height = this.$refs.postCard[0].clientHeight - 21 + "px";
    },
    async handlePost() {},
    // 编辑
    toEdit(postId) {
      let route = {
        path: "/createPost",
        query: {
          postId: postId,
        },
      };
      this.$router.push(route);
      debugger;
    },

    // 删除
    toDelete(postId) {
      debugger;
    },

    // 新建岗位
    toCreatePost() {
      this.$router.push("/createPost");
    },
  },
};
</script>

<style scoped lang="scss">
>>> .el-card__body {
  padding: 10px 20px;
}
$activeColor: #31b4f2;
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
.post-item-wrapper {
  margin: 0.5rem;
  .post-title {
    @extend .margin;
    @extend .more-text;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $activeColor;
    }
  }
  .newIcon-box {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .new-text {
      @extend .more-text;
      color: #999;
    }
    .iconxinjian {
      display: inline-block;
      margin: 0 auto;
      font-size: 4rem;
      color: #cccccc;
    }
  }
}
</style>
