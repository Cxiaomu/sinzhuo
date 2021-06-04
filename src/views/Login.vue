<!-- 注册、登录页 -->
<template>
  <div id="impower">
    <!-- type="flex" justify="center" align="middle" -->
    <el-row type="flex" justify="center" align="middle">
      <!-- left start-->
      <el-col class="hidden-sm-and-down" :md="12" :lg="12" :xl="12">
        <div class="text-wrapper">
          <div>
            <img class="logo-img" src="../assets/img/logo/logo-all-gray.png" />
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
                        @change="changeRole"
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
                    <el-form-item label="账号：" prop="username">
                      <el-input
                        class="form-input"
                        v-model="loginForm.username"
                        placeholder="请输入账号/手机号"
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
                  </el-form>
                  <div class="login-detail">
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox v-model="remember" class="remember">
                          <span>记住密码</span>
                        </el-checkbox>
                      </el-col>
                      <!-- <el-col :span="16">
                        <span class="forget" @click="toReSetPwd">忘记密码</span>
                      </el-col> -->
                    </el-row>
                  </div>
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
                    <el-form-item label="手机号：" prop="tel">
                      <el-input
                        class="form-input"
                        v-model="registerForm.tel"
                        placeholder="请输入手机号"
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
                    <el-form-item label="确认密码：" prop="rePassword">
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
                  </el-form>
                  <div class="btn-wrapper">
                    <el-button
                      type="primary"
                      @click="toRegister"
                      class="m-bottom-22"
                      >注册</el-button
                    >
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
import { getUserInfo, registerUser } from "@/api/user";
import { RegTel } from "@/utils/ways";
import md5 from "js-md5";
export default {
  name: "Login",
  data() {
    return {
      activeType: "login", // 激活标签页 登录-login,注册-register
      remember: true,
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
      loginForm: {
        role: 1,
        username: "wangwu",
        password: "123456abc",
      },
      loginRule: {
        role: [{ required: true, message: "请选择身份", trigger: "change" }],
        username: [
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
          },
        ],
      },
      agree: false,
      registerForm: {
        role: 1,
        // name: "",
        tel: "",
        password: "",
        rePassword: "",
      },
      registerRule: {
        role: [{ required: true, message: "请选择身份", trigger: "change" }],
        // name: [{ required: true, message: "请输入姓名", trigger: "blur" }],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 14,
            message: "长度在 8 到 14 个字符，且至少包含数字、字母",
            trigger: "blur",
          },
        ],
        rePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        tel: [{ required: true, message: "请输入手机号", trigger: "blur" }],
      },
    };
  },
  components: {},

  watch: {},

  computed: {
    ...mapGetters(["isLogin"]),
  },
  created() {
    if (localStorage.getItem("userInfo") !== "{}") {
      debugger;
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.loginForm = userInfo;
    }
    // 若已登录 -> 首页
    if (this.isLogin) {
      this.$router.push("/index");
    } else if (this.$route.params.activeType) {
      this.activeType = this.$route.params.activeType;
    }
  },

  methods: {
    ...mapActions(["userLogin"]),

    // 登录切换角色
    changeRole() {
      let username = "";
      let password = "";
      switch (arguments[0]) {
        case 1:
          username = "wangwu";
          password = "123456abc";
          break;
        case 2:
          username = "lisi";
          password = "123456abc";
          break;
        case 3:
          username = "zhangsan";
          password = "123456abc";
          break;
      }
      this.loginForm.username = username;
      this.loginForm.password = password;
    },
    // 点击登录
    toLogin() {
      this.$refs["loginForm"].validate(async (valid) => {
        if (valid) {
          let params = {
            role: this.loginForm.role,
            username: this.loginForm.username,
            password: md5(this.loginForm.password),
          };
          let res = await getUserInfo(params);
          debugger;
          // 用户存在
          if (res.length > 0) {
            let data = await this.userLogin(res[0]);
            debugger;
            if (data) {
              if (this.remember) {
                this.toRemember(res[0]);
              }
              this.$router.push("/index");
            }
          } else {
            this.$message.warning("用户信息错误");
          }
          console.log(res);
        } else {
          this.$message.warning("请填写完整登录信息");
        }
      });
    },

    // 记住密码
    toRemember(params) {
      if (typeof Storage !== "undefined") {
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("role", this.loginForm.role);
        localStorage.setItem("userInfo", JSON.stringify(params));
      } else {
        this.$message.warning("记住密码失败！该浏览器暂不支持记住密码");
      }
    },

    // 忘记密码
    toReSetPwd() {},

    // 点击注册
    toRegister() {
      this.$refs["registerForm"].validate(async (valid) => {
        if (valid) {
          if (this.registerForm.password !== this.registerForm.rePassword) {
            this.$message.warning("两次密码不一致");
            return;
          }
          if (!RegTel(this.registerForm.tel)) {
            this.$message.warning("手机号格式不正确");
            return;
          }
          if (!this.agree) {
            this.$message.warning("请同意注册协议");
            return;
          }
          this.registerApi();
        } else {
          this.$message.warning("请填写完整注册信息");
        }
      });
    },
    // 请求注册接口
    async registerApi() {
      let params = {
        role: this.registerForm.role,
        tel: this.registerForm.tel,
        password: md5(this.registerForm.password),
      };
      // 注册
      let res = await registerUser(params);
      if (res.success && !res.exist) {
        this.$message.success("注册成功，请切换登录");
      } else if (res.exist) {
        this.$message.warning("该用户已存在");
      } else {
        this.$message.warning("注册失败");
      }
    },
    // 注册协议
    toTreaty() {
      let routerJump = this.$router.resolve("/treaty");
      window.open(routerJump.href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
$white: #ffffff;
.el-row {
  height: 100%;
}
#impower {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/img/bg/bj2.jpg");
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
      color: $white;
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
        .login-detail {
          .remember {
            float: right;
          }
          .forget {
            float: right;
            position: relative;
            right: 20%;
            color: #666666;
            cursor: pointer;
          }
        }
        .btn-wrapper {
          text-align: center;
          .el-button {
            width: 40%;
            display: block;
            margin: 22px auto;
          }
          // .m-bottom-22 {
          //   margin-bottom: 22px;
          // }
          .treaty {
            color: #2e58ff;
          }
        }
      }
    }
  }
}
</style>
