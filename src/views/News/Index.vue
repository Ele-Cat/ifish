<template>
  <div class="news">
    <div class="news-box">
      <div class="news-item bf" v-for="newsType in newsTypes" :key="newsType.key">
        <div class="news-title">
          <p>{{ newsType.label }}</p>
          <p :title="`更新时间${newsType['updateTime']}`">{{ newsType['updateTime'] }}<ReloadOutlined v-if="!newsType.isFetching" :title="`拉取最新${newsType.label}`" @click="fetchNews(newsType, true)" /><LoadingOutlined v-else title="拉取中..." /></p>
        </div>
        <perfect-scrollbar class="scroll-bar">
          <a-spin v-if="newsType.isFetching" tip="加载中..."></a-spin>
          <a-empty v-else-if="!newsType.isFetching && !newsType['data']?.length" description="暂无数据" />
          <div v-else>
            <a class="news-info" v-for="(news, index) in newsType['data']" :key="index" :href="news.url" :title="news.title" target="_blank">
              <span>{{ index + 1 }}.<template v-if="newsType.value === '历史上的今天'">【{{ news.year }}年】</template>{{ news.title }}</span>
              <span>{{ formatHot(news.hot) }}</span>
            </a>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import axios from 'axios';
import { ReloadOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import dayjs from "dayjs";
import useStore from "@/store";
const { useNewsStore } = useStore();
import { toast } from "@/utils/feedback";

const newsTypes = computed(() => {
  return useNewsStore.lists.filter(item => item.visible);
});
const fetchNews = (item, flag) => {
  const url = `https://api.lolimi.cn/API/jhrb/?hot=${item.value}`;
  item["isFetching"] = true;
  item["data"] = [];
  axios.get(url).then(res => {
    const {data, code, updateTime} = res.data;
    if (code === 200) {
      item["data"] = data.sort((a, b) => b.hot - a.hot);
      item["updateTime"] = formateTime(updateTime);
      if (flag) {
        toast({
          content: `${item.label}拉取成功！`
        })
      }
    }
    item["isFetching"] = false;
  }).catch(() => {
    item["isFetching"] = false;
  })
}
newsTypes.value.forEach(item => {
  fetchNews(item, false);
})

const formateTime = (dateString) => {
  return dayjs(dateString).format('YYYY-MM-DD HH:mm:ss');
}
const formatHot = (hot) => {
  if (hot) {
    let hotStr = hot.toString();
    if (hotStr.indexOf("万") >= 0 || Number(hotStr) < 10000) {
      return hotStr;
    } else {
      return (Number(hotStr) / 10000).toFixed(1) + "万";
    }
  }
}
</script>

<style lang="less" scoped>
.news {
  padding-bottom: 20px;
  .news-box {
    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    gap: 18px;
    .news-item {
      grid-column: span 1 / span 1;
      overflow: hidden;
      background-color: var(--theme-bg-color-a8);
      border-radius: 8px 8px 0 0;
      transition: all .3s;
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
        height: 260px;
        padding: 10px 12px;
        box-shadow: 0 0 10px inset var(--grey-9-a1);
        .ant-spin-spinning {
          display: block;
          margin: 88px auto;
        }
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
          &:visited {
            color: var(--grey-6);
          }
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .ant-empty {
        margin-top: 20px;
      }
      &:hover {
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04);
      }
    }
  }
}
html[theme = "dark"] {
  .scroll-bar {
    box-shadow: 0 0 4px inset var(--color-orange) !important;
  }
}
@media screen and (max-width: 1280px) {
  .news {
    .news-box {
      grid-template-columns: repeat(2, minmax(0px, 1fr));
    }
  }
}
@media screen and (max-width: 976px) {
  .news {
    .news-box {
      grid-template-columns: repeat(1, minmax(0px, 1fr));
    }
  }
}
</style>