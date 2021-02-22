<template>
  <div id="footer-wrapper">
    <!-- 平台信息 start -->
    <div class="footer-container-first">
      <div class="footer-detail">
        <el-row>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="detail-item">
              <h3 class="item-title">平台介绍</h3>
              <p class="item-text">
                莘灼大学生创新创业服务平台是学生、导师、企业三方交互的桥梁，
                企业可以宣传企业文化，发布招聘岗位，对学生的创意项目进行投资，接收学生简历，寻找所需领域的人才；
                导师可以发布课程与兼职岗位，对学生进行学习和项目的指导；
                学生可以发布创意项目并寻找融资，学习所需的课程，联系导师指导，寻找适合的岗位，投递简历。
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="detail-item">
              <h3 class="item-title">平台特色</h3>
              <p class="item-text">
                作为双创潮流的主力，大学生们很乐于向投资人大谈自己的技术如何领先与独特，
                却很少涉及这些技术或产品究竟会有多大的市场空间，这些劣势是不可忽视的，
                导师、企业恰巧拥有这些。IE-科创平台既能满足企业对人才、有价值的项目的需求，
                也能让学生的创意得到释放、找到心仪的岗位等，还能帮助导师更加充分实现自我价值，共同创造无限的可能！
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="detail-item">
              <h3 class="item-title">联系我们</h3>
              <p class="item-text">Q Q：2691091258</p>
              <p class="item-text">邮箱：cxiaomu_la@163.com</p>
              <p class="item-text">电话：178-6061-8426</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 平台信息 end -->
    <!-- 友链 版权 start -->
    <div class="footer-container-second">
      <div class="footer-link">
        <el-row>
          <el-col :span="24">
            <ul>
              <li v-for="link in linkList" :key="link.name">
                <a class="link-a" :href="link.href" target="_blank">
                  {{ link.name }}</a>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <p class="link">
              @2021-2023 版权所有 鄂ICP备20005633号-1
              <a class="link-a" href="http://cxiaomu.cn/" target="_blank">
              cxiaomu.cn
              </a>
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 友链 版权 end -->
  </div>
</template>

<script>
export default {
  name: "SFooter",
  data() {
    return {
      linkList: [
        {
          name: "大学生就业网",
          href: "https://www.ncss.cn/",
        },
        {
          name: "大学生创业服务网",
          href: "https://cy.ncss.cn/",
        },
        {
          name: "CSDN社区",
          href: "https://www.csdn.net/",
        },
        {
          name: "牛客网",
          href: "https://www.nowcoder.com/",
        },
        {
          name: "慕课网",
          href: "https://www.imooc.com/",
        },
        {
          name: "菜鸟教程",
          href: "https://www.runoob.com/",
        },
        {
          name: "51CTO学院",
          href: "https://edu.51cto.com/",
        },

        {
          name: "腾讯课堂",
          href: "https://ke.qq.com/",
        },
        {
          name: "网易云课堂",
          href: "https://study.163.com/",
        },
        {
          name: "学堂在线",
          href: "http://www.xuetangx.com/",
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
$activeColor: #31b4f2;
$bgColor: #025492;
.link {
  line-height: 25px;
  color: #999;
  font-size: 0.9rem;
}
.f-container {
  width: 90%;
  margin: 1rem auto;
  padding: 1rem 2rem;
}
.margin {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
#footer-wrapper {
  .footer-container-first {
    background-color: $bgColor;
    .footer-detail {
      @extend .f-container;
      .detail-item {
        padding: 0 1.8rem;
        text-align: left;
        color: #fff;
        .item-title {
          letter-spacing: 0.1rem;
          font-weight: 500;
        }
        .item-text {
          color: #eeeeee;
          font-size: 0.9rem;
          letter-spacing: 0.07rem;
          line-height: 160%;
        }
      }
    }
  }
  .footer-container-second {
    .footer-link {
      @extend .f-container, .link;
      text-align: center;
      background-color: #fff;
      ul {
        list-style: none;
        @extend .margin;
        li {
          display: inline-block;
          margin: 0 0.5rem;
        }
      }
      .link-a {
        @extend .link;
        text-decoration: none;
        &:hover {
          color: $activeColor;
        }
      }
      p {
        @extend .margin;
      }
    }
  }
}
</style>
