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
            ></el-input-number>
            K
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
            ></el-input-number>
            人
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
          <el-form-item label="公司名称：" prop="unit">
            <el-input
              v-model="postForm.unit"
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
          <el-button type="primary" @click="toPublish">{{ btnText }}</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPostDetail, createPost, updatePost } from "@/api/post";
import { mapGetters } from "vuex";
export default {
  name: "CreatePost",
  data() {
    return {
      isCreate: true, // 是否为新建
      btnText: "发布",
      postId: "",
      userId: 0,
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
        { id: "004", name: "3-5年" },
        { id: "005", name: "5-8年" },
        { id: "006", name: "无需经验" },
      ],
      postForm: {
        id: "",
        name: "", // 岗位名称
        time: "", // 发布时间
        unit: "", //公司名
        price: [0, 1], //薪资范围
        education: "本科", // 学历
        experience: "不限", // 经验
        need: [0, 1], // 招聘人数
        // 岗位职责
        duty: "",
        // 岗位要求
        require: "",
        address: "", //工作地址
      },
      postRule: {
        name: [
          { required: true, message: "请输入岗位名称", trigger: "blur" },
          {
            min: 2,
            max: 16,
            message: "长度在 2 到 16 个字符",
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
        unit: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "长度在 4 到 16 个字符",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "请输入工作地址", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 2 到 32 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},

  watch: {},

  computed: {
    ...mapGetters(["userInfo"]),
  },

  created() {
    this.userId = this.userInfo.id;
    if (this.$route.query.postId) {
      this.postId = this.$route.query.postId;
      this.isCreate = false;
      this.btnText = "更新";
      this.initData();
    } else {
      this.isCreate = true;
      this.btnText = "发布";
    }
  },

  methods: {
    // 初始化项目数据
    async initData() {
      let res = await getPostDetail({ postId: this.postId });
      debugger;
      if (res.length > 0) {
        this.postForm = res[0];
      }
    },

    // 发布
    toPublish() {
      this.$refs["newPost"].validate(async (valid) => {
        if (valid) {
          let params = {
            userId: this.userId,
            ...this.postForm,
          };
          let res = [];
          // 发布
          if (this.btnText === "发布") {
            res = await createPost(params);
            debugger;
          } else {
            // 更新
            params.postId = this.postId;
            res = await updatePost(params);
            debugger;
          }
          if (res.success) {
            let route = {
              path: "/postDetail",
              query: {
                postId: this.postId || res.id,
              },
            };
            this.$router.replace(route);
          }
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
@import "@/styles/global.scss";
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
