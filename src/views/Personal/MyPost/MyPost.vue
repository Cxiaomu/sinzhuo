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
              <h3
                v-text="post.name"
                class="post-title"
                @click="toPostById(post.id)"
              ></h3>
              <p class="price-box">
                薪资：
                <span v-text="post.price[0]"></span>k -
                <span v-text="post.price[1]"></span>k / 月
              </p>
              <p>
                学历：<span v-text="post.education"></span>
                <el-divider direction="vertical"></el-divider>
                经验：<span v-text="post.experience"></span>
              </p>
              <p>招聘人数：<span v-text="post.experience"></span></p>
              <p>
                <span v-text="post.unit"></span>
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
              <p class="new-text">发布岗位</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMyPost, delPost } from "@/api/post";
import { mapGetters } from "vuex";
export default {
  name: "MyPost",
  data() {
    return {
      styleObj: {
        height: "",
      },
      postList: [
        {
          id: "",
          name: "", // 岗位名称
          price: [], //薪资范围
          unit: "", //公司名
          education: "", // 学历
          experience: "", // 经验
          need: [], // 招聘人数
          address: "", //工作地址
        },
      ],
    };
  },

  components: {},

  watch: {},

  computed: {
    ...mapGetters(["userInfo"]),
  },

  created() {
    this.userId = this.userInfo.id;
    this.handlePost();
    this.initData();
  },

  mounted() {
    this.setNewCardHeigh();
    window.addEventListener("resize", this.setNewCardHeight);
  },

  methods: {
    setNewCardHeigh() {
      this.styleObj.height = this.$refs.postCard[0].clientHeight - 21 + "px";
    },

    // 初始化岗位列表
    async initData() {
      let userId = this.userId
      let res = await getMyPost({ userId });
      debugger;
      this.postList = res;
    },

    // 前往岗位详情
    toPostById(id) {
      let query = {
        postId: id,
      };
      this.$router.push({
        path: "/postDetail",
        query: query,
      });
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
    },

    // 删除
    async toDelete(postId) {
      let params = { postId: postId };
      let res = await delPost(params);
      if (res.success) {
        this.$message.success("删除成功！");
      } else {
        this.$message.error("删除失败！");
      }
      this.initData();
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
@import "@/styles/global.scss";
>>> .el-card__body {
  padding: 10px 20px;
}
.post-item-wrapper {
  margin: 0.5rem;
  .post-title {
    @extend .margin;
    @include more-text;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $activeColor;
    }
  }
  p {
    @include more-text;
  }
  .newIcon-box {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .new-text {
      @include more-text;
      color: $darkenGrayText;
    }
    .iconxinjian {
      display: inline-block;
      margin: 0 auto;
      font-size: 4rem;
      color: $createIconColor;
    }
  }
}
</style>
