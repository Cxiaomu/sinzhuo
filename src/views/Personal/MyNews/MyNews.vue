<!-- 我的消息  -->
<template>
  <div id="news-wrapper">
    <!-- 消息列表 start -->
    <div class="news-list-wrapper">
      <div class="news-item" v-for="(news, index) in newsList" :key="index">
        <div :class="['news-item-content', news.read ? '' : 'noread']">
          <el-row>
            <el-col :span="18">
              <h2 class="news-title" v-text="news.title"></h2>
            </el-col>
            <el-col :span="6">
              <p class="news-time" v-text="news.time"></p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <p class="news-content" v-text="news.content"></p>
            </el-col>
            <el-col :span="2" style="text-align: right">
              <el-button type="text" @click="toDelete(news.id)">删除</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 消息列表 end -->
    <div class="news-list-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="3"
        :pager-count="5"
        :total="newsList.length"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      newsList: [
        {
          read: false, // true 已读，false 未读
          title: "新消息",
          content: "阿斯顿v改变环境曾参与不会年纪既",
          time: "2021-01-01 18:12:22",
        },
        {
          read: false,
          title: "新消息",
          content: "阿斯顿v改变环sfaf住宿费境曾参与不会年纪既",
          time: "2021-01-01 18:12:22",
        },
        {
          read: false,
          title: "新消息",
          content: "阿斯顿v改变环境萨芬地方曾参与不会年纪既",
          time: "2021-01-01 18:12:22",
        },
        {
          read: true,
          title: "新消息",
          content: "阿斯顿v改与不会年纪既",
          time: "2021-01-01 18:12:22",
        },
        {
          read: true,
          title: "新消息",
          content: "阿斯顿v改变环撒发达境曾参与不会年纪既",
          time: "2021-01-01 18:12:22",
        },
      ],
    };
  },
  components: {},

  watch: {},

  created() {},

  methods: {
    toDelete(id) {},
    changePage(nowPage) {},
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/global.scss";
#news-wrapper {
  .news-list-wrapper {
    .news-item {
      margin: 1rem 0;
      .news-item-content {
        padding: 0 1rem;
        .news-title {
          font-size: 1.1rem;
          @extend .margin;
          @include more-text();
        }
        .news-time {
          color: $darkenGrayText;
          text-align: right;
        }
        .news-content {
          color: $darkenGrayText;
          @extend .margin;
          @include more-text();
        }
      }
      .noread {
        border: solid 1px $lightActiveColor;
        border-radius: 5px;
      }
    }
  }
  .news-list-pagination {
    text-align: right;
    margin: 2rem 0 1rem;
  }
  .news-list-pagination >>> .el-pager li.active {
    background-color: $activeColor;
    color: $white;
  }
}
</style>
