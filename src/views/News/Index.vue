<template>
  <div class="news">
    <a-spin v-if="isFetching && !isFinished"></a-spin>
    <div class="news-box">
      <div class="news-item bf" v-for="newsType in newsTypes" :key="newsType.key">
        <div class="news-title">
          <p>{{ newsType.label }}</p>
          <p :title="`更新时间${newsType['datas']['time']}`">{{ newsType['datas']['time'] }}<ReloadOutlined v-if="!newsType.isFetching" :title="`拉取最新${newsType.label}`" @click="handleRefresh(newsType.value)" /><LoadingOutlined v-else title="拉取中..." /></p>
        </div>
        <perfect-scrollbar class="scroll-bar">
          <div v-if="newsType['datas']['hotTops']?.length">
            <a class="news-info" v-for="(news, index) in newsType['datas']['hotTops']" :key="index" :href="news.url" :title="news.title" target="_blank">
              <span>{{ index + 1 }}.{{ news.title }}</span>
              <span>{{ news.hotValue }}</span>
            </a>
          </div>
          <a-empty v-else description="暂无数据" />
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { ReloadOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { toast } from "@/utils/feedback";

const newsTypes = reactive([
  {
    label: "知乎热议",
    value: "zhihu",
    datas: [],
    isFetching: true,
  },
  {
    label: "百度热搜",
    value: "baidu",
    datas: [],
    isFetching: true,
  },
  {
    label: "抖音热搜",
    value: "douyin",
    datas: [],
    isFetching: true,
  },
  {
    label: "微博热搜",
    value: "weibo",
    datas: [],
    isFetching: true,
  },
  {
    label: "b站热搜",
    value: "bilibili",
    datas: [],
    isFetching: true,
  },
  {
    label: "贴吧热议",
    value: "tieba",
    datas: [],
    isFetching: true,
  },
  {
    label: "头条热搜",
    value: "toutiao",
    datas: [],
    isFetching: true,
  },
  {
    label: "历史上的今天",
    value: "history",
    datas: [],
    isFetching: true,
  },
  {
    label: "52破解",
    value: "pojie52",
    datas: [],
    isFetching: true,
  },
])

const isFinished = ref(false);
axios.get('https://api.moyuduck.com/hot/all').then(res => {
  for (const key in res.data.data) {
    newsTypes.map(newsType => {
      if (newsType.value === key) {
        newsType["datas"] = res.data.data[key];
      }
      newsType["isFetching"] = false;
    })
  }
  isFinished.value = true;
})

const handleRefresh = (type) => {
  newsTypes.map(newsType => {
    if (newsType["value"] === type) {
      newsType["isFetching"] = true;
    }
  })
  axios.get(`https://api.moyuduck.com/hot/top?type=${type}`).then(res => {
    newsTypes.map(newsType => {
      if (newsType["value"] === type) {
        newsType["datas"] = res.data.data;
        newsType["isFetching"] = false;
        toast({
          content: `${newsType['label']}拉取成功`
        })
      }
    })
  }).catch(() => {
    toast({
      content: `拉取失败`,
      type: "error"
    })
  })
}
</script>

<style lang="less" scoped>
.news {
  .news-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .news-item {
      width: 32.3%;
      overflow: hidden;
      margin-bottom: 14px;
      background-color: var(--theme-bg-color-a8);
      border-radius: 8px 8px 0 0;
      .news-title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        height: 2.4em;
        line-height: 2.6em;
        padding: 0 10px;
        p {
          &:nth-of-type(1) {
            background: linear-gradient(to right bottom, #ff9966, #FD6585);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
          &:nth-of-type(2) {
            font-size: 12px;
          }
        }
        .anticon {
          margin-left: 6px;
          cursor: pointer;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .scroll-bar {
        height: 200px;
        padding: 10px 12px;
        box-shadow: 0 0 10px inset var(--grey-9-a1);
        .news-info {
          display: flex;
          justify-content: space-between;
          line-height: 1.6em;
          color: var(--theme-text-color);
          text-decoration: none;
          transition: all .3s;
          span {
            &:nth-of-type(1) {
              flex: 1;
              margin-right: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .ant-empty {
        margin-top: 20px;
      }
    }
  }
}
html[theme = "dark"] {
  .scroll-bar {
    box-shadow: 0 0 4px inset var(--color-orange) !important;
  }
}
@media screen and (max-width: 1200px) {
  .news {
    .news-box {
      .news-item {
        width: 49%;
        margin-bottom: 12px;
        border-radius: 6px 6px 0 0;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .news {
    .news-box {
      .news-item {
        width: 100%;
        border-radius: 4px 4px 0 0;
      }
    }
  }
}
</style>