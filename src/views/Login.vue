<!-- 注册、登录页 -->
<template>
  <div id="impower">
    <!-- type="flex" justify="center" align="middle" -->
    <el-row type="flex" justify="center" align="middle">
      <!-- left start-->
      <el-col class="hidden-sm-and-down" :md="12" :lg="12" :xl="12">
        <div class="text-wrapper">
          <div>
            <img class="logo-img" src="../assets/img/logo-all-gray.png" />
          </div>
          <div class="logo-text">
            <span class="logo-bold">莘</span>莘学子<br />
            <span class="logo-bold">灼</span>灼其华
          </div>
        </div>
      </el-col>
      <!-- left end-->
      <!-- right start-->
      <el-col :xs="16" :sm="12" :md="9" :lg="7" :xl="7">
        <div class="impower-wrapper">
          <el-tabs v-model="activeType" :stretch="true">
            <!-- login start -->
            <el-tab-pane name="login">
              <span slot="label">
                <span class="tab-title">登录</span>
              </span>
              <div class="box-wrapper">
                <div class="box-content">
                  <el-form
                    :model="loginForm"
                    :rules="loginRule"
                    ref="loginForm"
                    label-width="110px"
                  >
                    <el-form-item label="身份：" prop="role">
                      <el-select
                        class="form-input"
                        v-model="loginForm.role"
                        placeholder="请选择身份"
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
                        class="form-input"
                        v-model="loginForm.userName"
                        placeholder="请输入账号"
                        clearable
                      >
                      </el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                      <el-input
                        class="form-input"
                        v-model="loginForm.password"
                        type="password"
                        show-password
                        placeholder="请输入密码"
                        clearable
                      >
                      </el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" required>
                      <el-input
                        class="form-input"
                        v-model="securityCode"
                        type="text"
                        placeholder="请输入验证码"
                      >
                      </el-input>
                    </el-form-item>
                  </el-form>
                  <div class="btn-wrapper">
                    <el-button type="primary" @click="toLogin">登录</el-button>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- login start -->
            <!-- register start -->
            <el-tab-pane name="register">
              <span slot="label">
                <span class="tab-title">注册</span>
              </span>
              <div class="box-wrapper">
                <div class="box-content">
                  <el-form
                    :model="registerForm"
                    :rules="registerRule"
                    ref="registerForm"
                    label-width="110px"
                  >
                    <el-form-item label="身份：" prop="role">
                      <el-select
                        class="form-input"
                        v-model="registerForm.role"
                        placeholder="请选择身份"
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
                    <!-- <el-form-item label="姓名：" prop="name">
                      <el-input
                        class="form-input"
                        v-model="registerForm.name"
                        type="text"
                        clearable
                      >
                      </el-input>
                    </el-form-item> -->
                    <el-form-item label="账号：" prop="userName">
                      <el-input
                        class="form-input"
                        v-model="registerForm.userName"
                        placeholder="账号为企业代码/工号/学号"
                        clearable
                      >
                      </el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                      <el-input
                        class="form-input"
                        v-model="registerForm.password"
                        type="password"
                        show-password
                        placeholder="请输入密码"
                        clearable
                      >
                      </el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="password">
                      <el-input
                        class="form-input"
                        v-model="registerForm.rePassword"
                        type="password"
                        show-password
                        placeholder="请再次输入密码"
                        clearable
                      >
                      </el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" required>
                      <el-input
                        class="form-input"
                        v-model="securityCode"
                        placeholder="请输入验证码"
                        type="text"
                      >
                      </el-input>
                    </el-form-item>
                  </el-form>
                  <div class="btn-wrapper">
                    <el-button type="primary" @click="toRegister"
                      >注册</el-button
                    >
                    <br />
                    <br />
                    <el-checkbox v-model="agree"
                      >阅读并接受<span class="treaty" @click="toTreaty"
                        >注册协议</span
                      ></el-checkbox
                    >
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- register end -->
          </el-tabs>
        </div>
      </el-col>
      <!-- right end-->
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      activeType: "login", // 激活标签页 登录-login,注册-register
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
      securityCode: "", // 验证码
      loginForm: {
        role: "",
        userName: "",
        password: "",
      },
      loginRule: {
        role: [{ required: true, message: "请选择身份", trigger: "change" }],
        userName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个数字",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      agree: false,
      registerForm: {
        role: "",
        // name: "",
        userName: "",
        password: "",
        rePassword: "",
        agree: false,
      },
      registerRule: {
        role: [{ required: true, message: "请选择身份", trigger: "change" }],
        // name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        userName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个数字",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 14,
            message: "长度在 8 到 14 个字符，且至少包含数字、字母",
            trigger: "blur",
          }
        ],
        rePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        agree: [
          { required: true, message: "请勾选同意注册协议", trigger: "change" },
        ],
      },
    };
  },
  components: {},

  watch: {},

  computed: {
    ...mapGetters(["isLogin"]),
  },
  created() {
    // 若已登录 -> 首页
    if (this.isLogin) {
      this.$router.push("/index");
    } else if (this.$route.params.activeType) {
      this.activeType = this.$route.params.activeType;
    }
  },

  methods: {
    ...mapActions(["userLogin"]),

    // 点击登录
    toLogin() {
      this.$refs['loginForm'].validate(async (valid, object) => {
        if (valid) {
          let data = await this.userLogin({
            loginName: this.loginForm.userName,
            loginPwd: this.loginForm.password,
          });
          if (data) {
            this.$router.push("/index");
          }
          console.log(data);
        } else {
          this.$message({
            message: '请填写完整登录信息',
            type: 'warning'
          })
        }
      })
    },

    // 点击注册
    toRegister() {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {

        } else {
          this.$message({
            message: '请填写完整注册信息',
            type: 'warning'
          })
        }
      })
    },

    // 注册协议
    toTreaty() {
      let routerJump = this.$router.resolve('/treaty');
      window.open(routerJump.href, '_blank')
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  height: 100%;
}
#impower {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/img/bj2.jpg");
  background-size: cover;
  .text-wrapper {
    .logo-img {
      height: 4rem;
      widows: 4rem;
      position: absolute;
      top: 4rem;
      left: 5rem;
    }
    .logo-text {
      position: relative;
      top: 2rem;
      left: 3rem;
      font-size: 4rem;
      color: #fff;
      letter-spacing: 1rem;
      font-weight: 300;
      .logo-bold {
        font-size: 5rem;
        font-weight: 400;
      }
    }
  }
  .impower-wrapper {
    padding: 0.8rem 0;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.93);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    .tab-title {
      font-size: 1.2rem;
      display: inline-block;
    }
    .box-wrapper {
      margin: 1rem auto 2rem;
      .box-content {
        width: 90%;
        margin: 0 auto;
        .form-input {
          width: 80%;
        }
        .btn-wrapper {
          text-align: center;
          .treaty {
            color: #2e58ff;
          }
        }
      }
    }
  }
}
</style>
