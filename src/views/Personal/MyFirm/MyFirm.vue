<!-- 我的企业  -->
<template>
  <div id="firm-wrapper">
    <!-- 消息列表 start -->
    <div class="firm-list-wrapper">
      <div v-if="isEmpty">
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="new-item-wrapper" @click="toCreateFirm">
              <el-card
                shadow="hover"
                ref="newCard"
                :body-style="{ height: '237px' }"
              >
                <div class="newIcon-box">
                  <span class="iconfont iconxinjian"></span>
                  <p class="new-text">添加企业</p>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="firm-item" v-else>
        <el-row class="firm-item-content">
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <div
              class="firm-img-box"
              ref="imgBox"
              @click="toProjectById(firm.id)"
            >
              <img class="firm-img" :src="firm.imgUrl" />
            </div>
          </el-col>
          <el-col :span="17">
            <div class="firm-detail-box" ref="detailBox">
              <h2 class="firm-title" v-text="firm.name"></h2>
              <p class="firm-content" v-text="firm.own"></p>
              <p class="firm-content" v-text="firm.field"></p>
              <p class="firm-abstract" v-text="firm.abstract"></p>
            </div>
          </el-col>
          <el-col :span="2" style="text-align: right">
              <el-button type="text" @click="toUpdate(firm.id)">编辑</el-button>
              <el-button
                type="text"
                @click="toDelete(firm.id)"
                style="color: #f56c6c"
                >删除</el-button
              >
            </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFirm",
  data() {
    return {
      isEmpty: true,
      firm: {
        id: "001", // 注册编号
        name: "v规划布局", //名称
        own: "me", //法人
        field: "001", //领域
        imgUrl: require("@/assets/img/project/1-project.jpg"),
        abstract: `深圳市顺丰物流有限公司承接深圳至全国、世界各地航空货物运输业务我公司与国内各大
        航空公司建立了长期的合作关系，如在深圳航空公司，翡翠国际货运航空公司，中国南方航空公司，。`,
        contact: {
          name: "联系人",
          tel: "17860618426",
          email: "cxiaomu_la@163.com",
        },
      },
    };
  },
  components: {},

  created() {},

  mounted() {
    this.isEmpty = this.firm.id ? false : true;
  },

  methods: {
    toCreateFirm() {
      this.$router.push("/createFirm");
    },

    toUpdate(id) {
      let route = {
        path: "/createFirm",
        query: {
          firmId: this.firm.id,
        },
      };
      this.$router.push(route);
    },
    toDelete(id) {},
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#firm-wrapper {
  .firm-list-wrapper {
    .new-item-wrapper {
      margin: 0.5rem;
      .new-title {
        @extend .margin;
        @include more-text;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: $activeColor;
        }
      }
      .newIcon-box {
        display: inline-block;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .new-text {
          @include more-text;
          color: $darkenGrayText;
        }
        .iconxinjian {
          display: inline-block;
          margin: 0 auto;
          font-size: 4rem;
          color: $createIconColor;
        }
      }
    }
    .firm-item {
      margin: 1rem 0;
      .firm-item-content {
        padding: 0 1rem;
        .firm-img-box {
          overflow: hidden;
          cursor: pointer;
          .firm-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .firm-detail-box {
          padding-left: 1rem;
          overflow: hidden;
        }
        .firm-title {
          font-size: 1.2rem;
          @extend .margin;
          @include more-text();
        }
        .firm-content {
          color: $darkenGrayText;
          @extend .margin;
          @include more-text();
        }
        .firm-abstract {
          color: $darkenGrayText;
          @extend .margin;
          @include more-text(2);
        }
      }
    }
  }
}
</style>
