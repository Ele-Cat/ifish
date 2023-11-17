import { defineStore } from "pinia";

export const useNewsStore = defineStore("ifishNews", {
  state: () => {
    return {
      lists: [
        {
          label: "知乎热议",
          value: "知乎",
          visible: true,
        },
        {
          label: "百度热搜",
          value: "百度",
          visible: true,
        },
        {
          label: "抖音热搜",
          value: "抖音",
          visible: true,
        },
        {
          label: "快手热搜",
          value: "快手",
          visible: true,
        },
        {
          label: "微博热搜",
          value: "微博",
          visible: true,
        },
        {
          label: "b站热搜",
          value: "哔哩哔哩",
          visible: true,
        },
        {
          label: "贴吧热议",
          value: "百度贴吧",
          visible: true,
        },
        {
          label: "头条热搜",
          value: "今日头条",
          visible: true,
        },
        {
          label: "腾讯新闻",
          value: "腾讯新闻",
          visible: true,
        },
        {
          label: "网易新闻",
          value: "网易新闻",
          visible: true,
        },
        {
          label: "澎湃新闻",
          value: "澎湃新闻",
          visible: true,
        },
        {
          label: "IT之家",
          value: "IT之家",
          visible: true,
        },
        {
          label: "稀土掘金",
          value: "稀土掘金",
          visible: true,
        },
        {
          label: "36氪",
          value: "36氪",
          visible: true,
        },
        {
          label: "少数派",
          value: "少数派",
          visible: true,
        },
        {
          label: "微信读书",
          value: "微信读书",
          visible: true,
        },
        {
          label: "英雄联盟",
          value: "英雄联盟",
          visible: true,
        },
        {
          label: "原神",
          value: "原神",
          visible: true,
        },
        {
          label: "历史上的今天",
          value: "历史上的今天",
          visible: true,
        },
      ],
    };
  },
  actions: {
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
