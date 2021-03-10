<template>
  <div id="post-detail-wrapper">
    <div class="f-container post-detail-container">
      <div class="f-container post-item">
        <!-- post header start -->
        <div class="post-header">
          <h2 v-text="postInfo.name" class="margin"></h2>
          <p class="price-box">
            <span v-text="postInfo.price[0]"></span> -
            <span v-text="postInfo.price[1]"></span> / 月
          </p>
          <h3 class="margin">
            <span v-text="postInfo.company" class="post-company" @click="toFirm"></span>
          </h3>
          <p>
            学历：<span v-text="postInfo.education"></span>
            <el-divider direction="vertical"></el-divider>
            经验：<span v-text="postInfo.experience" ></span>
            <el-divider direction="vertical"></el-divider>
            招聘人数：<span v-text="postInfo.need[0]"></span> -
            <span v-text="postInfo.need[1]"></span> 人
            <el-divider direction="vertical"></el-divider>
            发布时间：<span v-text="postInfo.time" ></span>
          </p>
        </div>
        <!-- post header end -->
        <!-- post body start -->
        <div class="post-body">
          <h3>岗位职责</h3>
          <p v-text="postInfo.duty"></p>
          <h3>岗位要求</h3>
          <p v-text="postInfo.require"></p>
          <h3>工作地址</h3>
          <p v-text="postInfo.address"></p>
        </div>
        <!-- post body end -->
        <div class="button-wrapper">
          <el-button type="primary" @click="toApply">申请岗位</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  data() {
    return {
      postId: "",
      postInfo: {
        id: "001",
        name: "WEB前端开发", // 岗位名称
        time: "2020-09-21", // 发布时间
        company: "稀里哗啦有限公司", //公司名
        price: ["8k", "12k"], //薪资范围
        education: "本科", // 学历
        experience: "不限", // 经验
        need: [10, 20], // 招聘人数
        // 岗位职责
        duty: `1、根据用户及公司需求，负责php端的开发；
               2、不断优化用户体验以及php服务端的性能；
               3、负责产品系统的开发，编写、接口的开发；
               4、配合产品设计、ui、ue设计师完成产品的调试开发；
               5、维护相关系统、保证系统运行的稳定性；
               6、配合后期IT系统建设，提出系统功能的改进建议；
               7、使用php语言开发应用服务、平台及接口。`,
        // 岗位要求
        require: `1、可以熟练使用php开发框架；
                  2、熟悉SQLSERVER，oracle等数据库；
                  3、可以编程、善于学习、可以独立完成上级下发的任务；
                  4、对php语言开发有足够的热情;
                  5、对服务器端的负载性嫩有一定理解可以进行评估优化；
                  6、善于沟通，有良好的沟通能力以及责任心，有团队合作精神。`,
        address: "上海 洋浦新江湾街道东方瑾缘1-601", //工作地址
      },
    };
  },
  components: {},

  watch: {},

  created() {
    this.postId = this.$route.query.postId;
  },

  methods: {
    toFirm() {
      this.$router.push("/firm")
    },
    toApply() {
      debugger;
    },
  },
};
</script>

<style scoped lang="scss">
$activeColor: #31b4f2;
#post-detail-wrapper {
  padding: 1rem 0;
  background-color: #f4f4f4;
  .post-detail-container {
    padding: 2rem 0;
    background-color: #fff;
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
}
</style>
