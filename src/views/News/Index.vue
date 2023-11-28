<template>
  <div class="news bf">
    <a-tabs v-model:activeKey="activeKey" animated>
      <a-tab-pane v-for="(newsType, index) in newsTypes" :key="index" :tab="newsType.label"></a-tab-pane>
    </a-tabs>
    <perfect-scrollbar class="scroll-bar">
      <a-spin v-if="isFetching" tip="加载中..."></a-spin>
      <a-empty v-else-if="!isFetching && !newsData.length" description="暂无数据" />
      <div v-else>
        <a class="news-info" v-for="(news, index) in newsData" :key="index" :href="news.link" :title="news.title" target="_blank">
          <span>{{ index + 1 }}.{{ news.title }}</span>
        </a>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import axios from 'axios';
import useStore from "@/store";
const { useNewsStore } = useStore();
import { toast } from "@/utils/feedback";

const activeKey = ref(0);

const newsTypes = computed(() => {
  return useNewsStore.lists.filter(item => item.visible);
});
const isFetching = ref(false);
const newsData = ref([]);
const fetchNews = () => {
  const base = "https://root.zhuayuya.com:8081/get_hot/?name="
  const newsLabel = newsTypes.value[activeKey.value]['label'];
  const url = `${base}${newsLabel}`;
  isFetching.value = true;
  axios.get(url).then(res => {
    const {data} = res;
    newsData.value = data.sort((a, b) => b.hot - a.hot);
    toast({
      content: `${newsLabel}拉取成功！`
    })
    isFetching.value = false;
  }).catch(() => {
    isFetching.value = false;
  })
}

watch(() => [activeKey.value, newsTypes.value], newVal => {
  fetchNews();
}, {
  immediate: true,
})
</script>

<style lang="less" scoped>
.news {
  padding: 12px 20px 20px;
  background-color: var(--theme-bg-color-a8);
  border-radius: 8px;
  overflow: hidden;
  .scroll-bar {
    width: 100%;
    height: calc(100vh - 300px);
    padding: 10px 12px;
    box-shadow: 0 0 10px inset var(--grey-9-a1);
    border-radius: 8px;
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
html[theme = "dark"] {
  .scroll-bar {
    box-shadow: 0 0 4px inset var(--color-orange) !important;
  }
}
</style>