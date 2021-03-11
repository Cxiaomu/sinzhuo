<template>
  <div id="create-post-wrapper">
    <div class="f-container create-post-container">
      <div class="f-container">
        <!-- 岗位表单 start -->
        <el-form
          :model="postForm"
          :rules="postRule"
          ref="newPost"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="岗位名称：" prop="name">
            <el-input
              v-model="postForm.name"
              class="post-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="薪资范围：" prop="price">
            <el-input-number
              v-model="postForm.price[0]"
              :min="1"
              :max="postForm.price[1]"
              label="k"
            ></el-input-number>
            -
            <el-input-number
              v-model="postForm.price[1]"
              :min="postForm.price[0]"
              label="k"
            ></el-input-number
            > K
          </el-form-item>
          <el-form-item label="学历：" prop="education">
            <el-select v-model="postForm.education" placeholder="请选择">
              <el-option
                v-for="item in educationOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经验：" prop="experience">
            <el-select v-model="postForm.experience" placeholder="请选择">
              <el-option
                v-for="item in experienceOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="招聘人数：" prop="need">
            <el-input-number
              v-model="postForm.need[0]"
              :min="1"
              :max="postForm.need[1]"
            ></el-input-number>
            -
            <el-input-number
              v-model="postForm.need[1]"
              :min="postForm.need[0]"
            ></el-input-number
            > 人
          </el-form-item>
          <el-form-item label="岗位职责：" prop="duty">
            <el-input
              type="textarea"
              :rows="10"
              v-model="postForm.duty"
            ></el-input>
          </el-form-item>
          <el-form-item label="岗位要求：" prop="require">
            <el-input
              type="textarea"
              :rows="10"
              v-model="postForm.require"
            ></el-input>
          </el-form-item>
          <el-form-item label="公司名称：" prop="company">
            <el-input
              v-model="postForm.company"
              class="post-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="工作地址：" prop="address">
            <el-input v-model="postForm.address" class="post-name"></el-input>
          </el-form-item>
        </el-form>
        <!-- 岗位表单 end -->
        <div class="button-wrapper">
          <el-button type="primary" @click="toPublish">发布</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      isCreate: true, // 是否为新建
      postId: "",
      educationOptions: [
        { id: "001", name: "大专" },
        { id: "002", name: "本科" },
        { id: "003", name: "硕士" },
        { id: "004", name: "博士" },
        { id: "005", name: "本科及以上" },
        { id: "006", name: "无学历要求" },
      ],
      experienceOptions: [
        { id: "001", name: "在校生" },
        { id: "002", name: "应届生" },
        { id: "003", name: "1-3年" },
        { id: "004", name: "无需经验" },
      ],
      postForm: {
        id: "001",
        name: "WEB前端开发", // 岗位名称
        time: "2020-09-21", // 发布时间
        company: "稀里哗啦有限公司", //公司名
        price: [8, 12], //薪资范围
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
      postRule: {
        name: [
          { required: true, message: "请输入岗位名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        price: [{ required: true, message: "请输入岗位名称", trigger: "blur" }],
        education: [
          { required: true, message: "请选择学历要求", trigger: "blur" },
        ],
        experience: [
          { required: true, message: "请选择经验要求", trigger: "blur" },
        ],
        need: [{ required: true, message: "请输入招聘人数", trigger: "blur" }],
        duty: [
          { required: true, message: "请输入岗位职责", trigger: "blur" },
          { min: 30, message: "长度至少为 30 个字符", trigger: "blur" },
        ],
        require: [
          { required: true, message: "请输入岗位要求", trigger: "blur" },
          { min: 30, message: "长度至少为 30 个字符", trigger: "blur" },
        ],
        company: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 4,
            max: 15,
            message: "长度在 4 到 15 个字符",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "请输入工作地址", trigger: "blur" },
          {
            min: 4,
            max: 25,
            message: "长度在 2 到 25 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},

  watch: {},

  created() {
    if (this.$route.query.postId) {
      this.postId = this.$route.query.postId;
      this.isCreate = false;
    } else {
      this.isCreate = true;
    }
  },

  methods: {
    // 发布
    toPublish() {
      this.$refs["newPost"].validate((valid) => {
        if (valid) {
          this.postForm.time = new Date().getTime();
          // 请求接口
          let route = {
            path: "/postDetail",
            query: {
              postId: "0010",
            },
          };
          this.$router.replace(route);
        }
      });
    },

    // 退出
    toQuite() {
      this.$router.replace("/myPost");
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
>>> .el-radio-group {
  line-height: 40px;
}
#create-post-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .create-post-container {
    padding: 2rem 0;
    background-color: $white;
  }
}
.post-name {
  width: 50%;
}
</style>
