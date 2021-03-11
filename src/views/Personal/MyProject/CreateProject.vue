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
          <el-form-item label="项目logo：" prop="logoImg">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="projectForm.logoImg"
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
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
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
          <el-button type="primary" @click="toPublish">发布</el-button>
          <el-button @click="toQuite">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectField, getProjectPhase } from "@/api/getJson.js";
export default {
  name: "CreateProject",
  data() {
    return {
      isCreate: true, // 是否为新建
      projectId: "",
      fieldList: [],
      phaseList: [],
      projectForm: {
        logoImg: [{ name: "LOGO", url: "" }],
        name: "创新测试",
        field: "住宿和餐饮业",
        time: '',
        abstract: `一、新颖全面且线上线下深度融合，出行是人类活动的刚需。
        二、“微校通”是利用现代信息技术实现家庭与学校快捷、实时沟通的教育网络平台。
        是一套可以有效解决老师和家长之间沟通，帮助孩子健康成长的、集先进的计算机技
        术和无线通信技术于一体的信息交流系统。三、他可以让家长每天都能了解到自己孩子
        在学校的情况，也可以让家长随时、随地的向老师提出建议或反映孩子在家里的表现。
        他充分调动社会教育资源，利用现代信息技术架起学校、家庭之间实时、快捷、有效沟
        通的桥梁，形成社会、学校、家庭和谐共育的局面，促进学生健康成长。`,
        phase: "项目规划",
        financing: false,
      },
      projectRule: {
        logoImg: [
          { required: true, message: "请上传项目logo", trigger: "blur" },
        ],
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
    } else {
      this.isCreate = true;
    }
  },

  methods: {
    // 获取项目领域列表
    async getFieldList() {
      let field = await getProjectField(this);
      if (field) {
        this.fieldList = field.filter((item) => {
          return item.id !== "000";
        });
      }
    },

    // 获取项目阶段列表
    async getPhaseList() {
      let phase = await getProjectPhase(this);
      if (phase) {
        this.phaseList = phase.filter((item) => {
          return item.id !== "000";
        });
      }
    },

    // 项目logo相关方法
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    // 发布
    toPublish() {
      this.$refs["newProject"].validate((valid) => {
        if (valid) {
          this.projectForm.time = new Date().getTime();
          // 请求接口
          let route = {
            path: "/projectDetail",
            query: {
              projectId: "0010",
            },
          };
          this.$router.replace(route);
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
@import '@/styles/global.scss';
>>> .el-radio-group {
  line-height: 40px;
}
#create-project-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .create-project-container {
    padding: 2rem 0;
    background-color:  $white;
  }
}
.project-name {
  width: 50%;
}
</style>
