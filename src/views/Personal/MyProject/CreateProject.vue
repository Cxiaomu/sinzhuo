<template>
  <div id="create-project-wrapper">
    <div class="f-container create-project-container">
      <div class="f-container">
        <el-form
          :model="projectForm"
          :rules="projectRule"
          ref="newProject"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="项目logo：" prop="imgUrl">
            <el-upload
              class="upload-demo"
              :action="uploadUrl"
              :on-success="successUpload"
              :on-error="errorUpload"
              :limit="1"
              list-type="picture"
              :before-upload="beforeAvatarUpload"
              :on-exceed="handleExceed"
              :file-list="projectForm.imgUrl"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="项目名称：" prop="name">
            <el-input
              v-model="projectForm.name"
              class="project-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="所属领域：" prop="field">
            <el-radio-group v-model="projectForm.field">
              <el-radio
                v-for="(field, index) in fieldList"
                :key="index"
                :label="field.name"
                :disabled="!isCreate"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="项目阶段：" prop="phase">
            <el-radio-group v-model="projectForm.phase">
              <el-radio
                v-for="(phase, index) in phaseList"
                :key="index"
                :label="phase.name"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="需要融资：" prop="financing">
            <el-radio-group v-model="projectForm.financing">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="项目概述：" prop="abstract">
            <el-input
              type="textarea"
              :rows="10"
              v-model="projectForm.abstract"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="button-wrapper">
          <el-button type="primary" @click="toPublish">{{ btnText }}</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectField, getProjectPhase } from "@/api/home.js";
import { getProjectDetail, createProject, updateProject } from "@/api/project";
export default {
  name: "CreateProject",
  data() {
    return {
      isCreate: true, // 是否为新建
      uploadUrl: "http://localhost:3000/project/projectLogo",
      btnText: "发布",
      projectId: "",
      fieldList: [],
      phaseList: [],
      projectForm: {
        imgUrl: [{ name: "LOGO", url: "" }],
        // imgUrl: [],
        name: "",
        field: "",
        time: "",
        abstract: "",
        phase: "",
        financing: null,
      },
      projectRule: {
        name: [
          { required: true, message: "请输入项目名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        field: [{ required: true, message: "请选择项目领域", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入项目描述", trigger: "blur" },
          { min: 30, message: "长度至少为 30 个字符", trigger: "blur" },
        ],
        phase: [{ required: true, message: "请选择项目阶段", trigger: "blur" }],
        financing: [
          { required: true, message: "请选择是否需要融资", trigger: "blur" },
        ],
      },
    };
  },
  components: {},

  watch: {},

  created() {
    this.getFieldList();
    this.getPhaseList();
    if (this.$route.query.projectId) {
      this.projectId = this.$route.query.projectId;
      this.isCreate = false;
      this.btnText = "更新";
      this.initData();
    } else {
      this.isCreate = true;
      this.btnText = "发布";
    }
  },

  methods: {
    // 获取项目领域列表
    async getFieldList() {
      let field = await getProjectField();
      if (field) {
        this.fieldList = field.data.filter((item) => {
          return item.id !== "0";
        });
      }
    },

    // 获取项目阶段列表
    async getPhaseList() {
      let phase = await getProjectPhase();
      if (phase) {
        this.phaseList = phase.data.filter((item) => {
          return item.id !== "0";
        });
      }
    },

    // 初始化项目数据
    async initData() {
      let res = await getProjectDetail({ projectId: this.projectId });
      debugger;
      if (res.length > 0) {
        this.projectForm = res[0];
        this.projectForm.imgUrl = [
          { name: "logo", url: this.projectForm.imgUrl },
        ];
        debugger;
      }
    },

    // 项目logo相关方法
    // 上传之前判断文件类型
    beforeAvatarUpload(file) {
      debugger
      const isImg = (file.type === "image/jpeg" || file.type === "image/png");
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isImg) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isImg && isLt2M;
    },

    // 图片上传成功
    successUpload(response, file, fileList) {
      debugger
      this.projectForm.imgUrl[0].name = response[0].name;
      this.projectForm.imgUrl[0].url = response[0].url;
      console.log(response, file, fileList);
    },

    // 图片上传失败
    errorUpload(err, file, fileList) {
      this.$message.warning("图片上传失败！")
      console.log(err, file, fileList);
    },

    // 图片限制个数
    handleExceed(files, imgUrl) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + imgUrl.length
        } 个文件`
      );
    },

    // 发布 或 更新
    toPublish() {
      this.$refs["newProject"].validate(async (valid) => {
        if (valid) {
          let params = {};
          let res = [];
          // 处理数据
          this.phaseList.forEach((item) => {
            if (item.name === this.projectForm.phase) {
              this.projectForm.phase = item.id;
            }
          });
          // 发布
          if (this.btnText === "发布") {
            this.fieldList.forEach((item) => {
              if (item.name === this.projectForm.field) {
                this.projectForm.field = item.id;
              }
            });
            params = {
              userId: "1",
              ...this.projectForm,
              imgUrl: this.projectForm.imgUrl[0]["url"],
            };
            debugger
            res = await createProject(params);
            debugger;
          } else {
            // 更新
            params = {
              projectId: this.projectId,
              userId: "1",
              phase: this.projectForm.phase,
              financing: this.projectForm.financing,
              abstract: this.projectForm.abstract,
              imgUrl: this.projectForm.imgUrl[0]["url"],
            };
            debugger
            res = await updateProject(params);
            debugger;
          }
          if (res.success) {
            // 请求接口
            let route = {
              path: "/projectDetail",
              query: {
                projectId: this.projectId || res.id,
              },
            };
            this.$router.replace(route);
          }
        }
      });
    },

    // 退出
    toQuite() {
      this.$router.replace("/myProject");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
>>> .el-radio-group {
  line-height: 40px;
}
#create-project-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .create-project-container {
    padding: 2rem 0;
    background-color: $white;
    >>> label[for="imgUrl"] {
      &:before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
      }
    }
  }
}
.project-name {
  width: 50%;
}
</style>
