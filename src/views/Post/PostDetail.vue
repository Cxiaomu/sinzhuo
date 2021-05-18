<template>
  <div id="post-detail-wrapper">
    <div class="f-container post-detail-container">
      <div class="f-container post-item">
        <!-- post header start -->
        <div class="post-header">
          <h2 v-text="postInfo.name" class="margin"></h2>
          <p class="price-box">
            <span v-text="postInfo.price[0]"></span>k -
            <span v-text="postInfo.price[1]"></span>k / 月
          </p>
          <h3 class="margin">
            <span
              v-text="postInfo.company"
              class="post-company"
            ></span>
          </h3>
          <p>
            学历：<span v-text="postInfo.education"></span>
            <el-divider direction="vertical"></el-divider>
            经验：<span v-text="postInfo.experience"></span>
            <el-divider direction="vertical"></el-divider>
            招聘人数：<span v-text="postInfo.need[0]"></span> -
            <span v-text="postInfo.need[1]"></span> 人
            <el-divider direction="vertical"></el-divider>
            发布时间：<span v-text="postInfo.time"></span>
          </p>
        </div>
        <!-- post header end -->
        <!-- post body start -->
        <div class="post-body">
          <h3>岗位职责</h3>
          <p v-text="postInfo.duty"></p>
          <h3>岗位要求</h3>
          <p v-text="postInfo.require"></p>
          <h3>公司名称</h3>
          <p v-text="postInfo.unit"></p>
          <h3>工作地址</h3>
          <p v-text="postInfo.address"></p>
        </div>
        <!-- post body end -->
        <div class="button-wrapper">
          <el-button type="primary" @click="toApply">申请岗位</el-button>
        </div>
      </div>
    </div>
    <!-- 联系对话框 start -->
    <el-dialog title="申请岗位" :visible.sync="applyDialog" width="30%" center>
      <div class="dialog-content">
        <ul>
          <li>
            <p>联系人：<span v-text="author.name"></span></p>
          </li>
          <li>
            <p>联系电话：<span v-text="author.tel"></span></p>
          </li>
          <li>
            <p>
              联系邮箱：<a
                class="link-a"
                :href="'mailto:' + author.email"
                target="_blank"
                >{{ author.email }}</a
              >
            </p>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="applyDialog = false">取 消</el-button>
        <el-button type="primary" @click="applyDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 联系对话框 end -->
  </div>
</template>

<script>
import { getPostDetail } from "@/api/post";
import { formateDate } from "@/utils/ways";
export default {
  name: "PostDetail",
  data() {
    return {
      postId: "",
      applyDialog: false,
      author: {
        name: "",
        tel: "",
        email: "",
      },
      postInfo: {
        id: "",
        name: "", // 岗位名称
        time: "", // 发布时间
        unit: "", //公司名
        price: [], //薪资范围
        education: "", // 学历
        experience: "", // 经验
        need: [], // 招聘人数
        duty: "", // 岗位职责
        require: "", // 岗位要求
        address: "", //工作地址
      },
    };
  },

  components: {},

  watch: {},

  created() {
    this.postId = this.$route.query.postId;
    this.initData();
  },

  methods: {
    // 初始化岗位数据
    async initData() {
      let res = await getPostDetail({ postId: this.postId });
      debugger;
      if (res.length > 0) {
        this.postInfo = res[0];
        this.postInfo.time = formateDate(
          new Date(res[0]["time"]),
          "YYYY-MM-DD"
        );
        this.author = res[1];
      }
    },

    toApply() {
      this.applyDialog = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#post-detail-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .post-detail-container {
    padding: 2rem 0;
    background-color: $white;
    .post-item {
      .post-header {
        margin-bottom: 2rem;
        h2 {
          display: inline-block;
        }
        .price-box {
          float: right;
          display: inline-block;
          font-size: 1.2rem;
          margin-top: 0.9rem;
          color: $activeColor;
        }
        .post-company {
          cursor: pointer;
          &:hover {
            color: $activeColor;
          }
        }
      }
      .post-body {
        h3 {
          border-left: solid 0.4rem $activeColor;
          padding-left: 1rem;
        }
        p {
          margin-bottom: 2rem;
        }
      }
    }
  }
  .dialog-content {
    ul {
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      p {
        padding-left: 2rem;
        line-height: 1.6rem;
        font-size: 1rem;
      }
      .link-a {
        font-size: 1rem;
      }
    }
  }
}
</style>
