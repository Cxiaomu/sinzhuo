<!-- 个人设置 -->
<template>
  <div id="my-setting-wrapper">
    <!-- 页面个人信息 start -->
    <div class="f-container">
      <el-form
        :model="userForm"
        :rules="rules"
        ref="userForm"
        label-width="100px"
        label-position="left"
        class="setting-userForm"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input
            v-model="userForm.name"
            :disabled="!isNew"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="userForm.sex" :disabled="!isNew">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份：" prop="role">
          <el-select
            v-model="userForm.role"
            :disabled="true"
            clearable
            class="input-3"
          >
            <el-option
              v-for="item in roleArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号：" prop="userName">
          <el-input
            v-model="userForm.userName"
            :disabled="true"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="userForm.password"
            :disabled="true"
            clearable
            class="input-3"
          ></el-input>
          <el-button type="text" class="change-btn" @click="showModel"
            >修改密码</el-button
          >
        </el-form-item>
        <el-form-item label="单位/学校：" prop="unit">
          <el-input
            v-model="userForm.unit"
            :disabled="!isNew"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门/学院：" prop="department">
          <el-input
            v-model="userForm.department"
            :disabled="!isNew"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话号码：" prop="tel">
          <el-input v-model="userForm.tel" clearable class="input-3"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input
            v-model="userForm.email"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="个人简介：" prop="abstract">
          <el-input
            type="textarea"
            :rows="5"
            v-model="userForm.abstract"
            class="input-3"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="button-wrapper">
        <el-button type="primary" @click="toChange">确认修改</el-button>
        <el-button @click="toQuite">取消修改</el-button>
      </div>
    </div>
    <!-- 页面个人信息 start -->
    <!-- 修改密码dialog start -->
    <el-dialog title="修改密码" :visible.sync="showPwdModel" width="30%" center>
      <el-form
        :model="pwdForm"
        :rules="pwdrules"
        ref="pwdForm"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="账号：" prop="userName">
          <el-input
            v-model="pwdForm.userName"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="原密码：" prop="password">
          <el-input
            type="password"
            v-model="pwdForm.password"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="rePassword">
          <el-input
            type="password"
            v-model="pwdForm.rePassword"
            clearable
            class="input-3"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPwdModel = false">取 消</el-button>
        <el-button type="primary" @click="changePwd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改密码dialog end -->
  </div>
</template>

<script>
export default {
  name: "MySetting",
  data() {
    return {
      isNew: true,
      showPwdModel: false,
      roleArr: [
        {
          label: "企业",
          value: 1,
        },
        {
          label: "教师",
          value: 2,
        },
        {
          label: "学生",
          value: 3,
        },
      ],
      pwdForm: {
        userName: "",
        password: "",
        rePassword: "",
      },
      userForm: {
        name: "陈柘含",
        sex: "男",
        role: 1,
        userName: "201711101040",
        password: "2eqwadsfsd",
        unit: "山东建筑大学",
        department: "计算机科学与技术学院",
        tel: "17860618426",
        email: "cxiaomu_la@163.com",
        abstract: `快乐池塘栽种了梦想就变成海洋 鼓的眼睛大嘴巴同样唱的响亮 
        借我一双小翅膀就能飞向太阳 我相信奇迹就在身上 啦啦啦啦啦 有你相伴 leap frog
        啦啦啦啦啦 自信成长有你相伴 leap frog  快乐的一只小青蛙`,
      },
      pwdrules: {
        userName: [{ required: true, message: "请输入账号/手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        rePassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
        ],
      },
      rules: {
        name: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        role: [{ required: true, message: "请选择身份", trigger: "change" }],
        userName: [{ required: true, message: "请输入账号/手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        unit: [
          { required: true, message: "请输入所在单位或学校", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        department: [
          { required: true, message: "请输入所在部门或学院", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        tel: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入个人简介", trigger: "blur" },
          { min: 5, message: "长度在 5 个字符以上", trigger: "blur" },
        ],
      },
    };
  },
  components: {},

  watch: {},

  created() {},

  methods: {
    // 修改密码dialog
    showModel() {
      this.showPwdModel = true;
      this.pwdForm.userName = this.userForm.userName;
      this.pwdForm.password = this.userForm.password;
    },

    // 修改基本信息
    toChange() {
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          this.$message.warning("请填写完成完整信息！");
        }
      });
    },

    // 取消修改
    toQuite() {},

    // 修改密码
    changePwd() {
      this.$refs["pwdForm"].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.showPwdModel = false;
        } else {
          this.$message.warning("请填写完成完整信息！");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
$delRed: #f56c6c;
#my-setting-wrapper {
  .setting-userForm {
    width: 80%;
    margin: 2rem auto;
    .change-btn {
      color: $delRed;
    }
  }
  .input-3 {
    width: 90%;
    min-width: 10rem;
  }
}
</style>
