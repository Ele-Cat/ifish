<template>
  <div class="news">
    <a-spin v-if="isFetching && !isFinished"></a-spin>
    <div class="news-box" v-else>
      <div class="news-item" v-for="newsType in objToArr(newsData.data)" :key="newsType.key">
        <div class="news-title">
          <p>{{ renderTitle(newsType.key) }}</p>
          <p>{{ newsType.time }}</p>
        </div>
        <div class="news-info" v-for="news in newsType.hotTops" :key="news.title">
          <a :href="news.url" target="_blank">{{ news.title }} - {{ news.hotValue }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core';

const { data: newsData, isFinished, isFetching } = useFetch('https://api.moyuduck.com/hot/all').get().json()
console.log('data: ', newsData._value);

const objToArr = (obj) => {
  const arr = [];
  for (const key in obj) {
    arr.push({
      key,
      hotTops: obj[key]["hotTops"],
      time: obj[key]["time"],
    })
  }
  return arr
}
const renderTitle = (key) => {
  const titles = {
    zhihu: "知乎",
    douyin: "抖音热搜",
    weibo: "微博热搜",
    baidu: "百度热搜",
    bilibili: "b站热搜",
    history: "历史上的今天",
    tieba: "贴吧热议",
    toutiao: "头条热搜",
    pojie52: "52破解",
  }
  return titles[key];
}
</script>

<style lang="less" scoped>
.news-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .news-item {
    width: 33%;
    height: 200px;
    overflow: scroll;
    margin-bottom: 24px;
    .news-title {
      display: flex;
      justify-content: space-between;
    }
    a {
      color: var(--theme-text-color);
      text-decoration: none;
    }
  }
}
</style>