<template>
  <div id="create-firm-wrapper">
    <div class="f-container create-firm-container">
      <div class="f-container">
        <el-form
          :model="firmForm"
          :rules="firmRule"
          ref="newFrim"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="公司logo：" prop="logoImg">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="firmForm.logoImg"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="公司名称：" prop="name">
            <el-input
              v-model="firmForm.name"
              class="firm-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="法人代表：" prop="own">
            <el-input
              v-model="firmForm.own"
              class="firm-name"
              :disabled="!isCreate"
            ></el-input>
          </el-form-item>
          <el-form-item label="所属领域：" prop="field">
            <el-radio-group v-model="firmForm.field">
              <el-radio
                v-for="(field, index) in fieldList"
                :key="index"
                :label="field.name"
                :disabled="!isCreate"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="公司规模：" prop="scale">
            <el-select v-model="firmForm.scale" placeholder="请选择">
              <el-option
                v-for="item in scaleOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司简介：" prop="abstract">
            <el-input
              type="textarea"
              :rows="10"
              v-model="firmForm.abstract"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contact.name">
            <el-input
              class="firm-name"
              v-model="firmForm.contact.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="contact.tel">
            <el-input
              class="firm-name"
              v-model="firmForm.contact.tel"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：" prop="contact.email">
            <el-input
              class="firm-name"
              v-model="firmForm.contact.email"
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
import { getProjectField } from "@/api/getJson.js";
export default {
  name: "CreateFirm",
  data() {
    return {
      isCreate: true, // 是否为新建
      firmId: "",
      fieldList: [],
      scaleOptions: [
        {
          id: "1",
          name: "0 - 19 人",
        },
        {
          id: "2",
          name: "20 - 99 人",
        },
        {
          id: "3",
          name: "100 - 499 人",
        },
        {
          id: "4",
          name: "500 - 999 人",
        },
        {
          id: "5",
          name: "1000+ 人",
        },
      ],
      firmForm: {
        logoImg: [{ name: "LOGO", url: "" }],
        name: "创新测试",
        own: "Cxiao",
        field: "住宿和餐饮业",
        abstract: `一、新颖全面且线上线下深度融合，出行是人类活动的刚需。
        二、“微校通”是利用现代信息技术实现家庭与学校快捷、实时沟通的教育网络平台。
        是一套可以有效解决老师和家长之间沟通，帮助孩子健康成长的、集先进的计算机技
        术和无线通信技术于一体的信息交流系统。`,
        scale: "公司规模",
        contact: {
          name: "联系人",
          tel: "17860618426",
          email: "cxiaomu_la@163.com",
        },
      },
      firmRule: {
        logoImg: [
          { required: true, message: "请上传公司logo", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        own: [
          { required: true, message: "请输入法人代表", trigger: "blur" },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个字符",
            trigger: "blur",
          },
        ],
        field: [{ required: true, message: "请选择公司领域", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入公司描述", trigger: "blur" },
          { min: 30, message: "长度至少为 30 个字符", trigger: "blur" },
        ],
        scale: [{ required: true, message: "请选择公司规模", trigger: "blur" }],
        contact: {
          name: [
            { required: true, message: "请输入合作联系人", trigger: "blur" },
            {
              min: 2,
              max: 6,
              message: "长度在 2 到 6 个字符",
              trigger: "blur",
            },
          ],
          tel: [
            { required: true, message: "请输入联系电话", trigger: "blur" },
            {
              min: 11,
              max: 11,
              message: "长度为 11 个字符（包含区号）",
              trigger: "blur",
            },
          ],
          email: [
            { required: true, message: "请输入联系邮箱", trigger: "blur" },
          ],
        },
      },
    };
  },
  components: {},

  watch: {},

  created() {
    this.getFieldList();
    if (this.$route.query.firmId) {
      this.firmId = this.$route.query.firmId;
      this.isCreate = false;
    } else {
      this.isCreate = true;
    }
  },

  methods: {
    // 获取公司领域列表
    async getFieldList() {
      let field = await getProjectField(this);
      if (field) {
        this.fieldList = field.filter((item) => {
          return item.id !== "000";
        });
      }
    },

    // 公司logo相关方法
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
      this.$refs["newFrim"].validate((valid) => {
        debugger;
        if (valid) {
          this.firmForm.time = new Date().getTime();
          // 请求接口
          let route = {
            path: "/firmDetail",
            query: {
              firmId: "0010",
            },
          };
          this.$router.replace(route);
        }
      });
    },

    // 退出
    toQuite() {
      this.$router.replace("/myFirm");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
>>> .el-radio-group {
  line-height: 40px;
}
#create-firm-wrapper {
  padding: 1rem 0;
  background-color: $darkenWhite;
  .create-firm-container {
    padding: 2rem 0;
    background-color: $white;
  }
}
.firm-name {
  width: 50%;
}
</style>
