import { defineStore } from "pinia";

export const useSystemStore = defineStore("ifishSystem", {
  state: () => {
    return {
      activeMenu: "home", // 当前聚焦的工具栏目
      darkMode: false,
      searchType: "百度",
      backgroundUrl: "",
      qqGroupLink: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914", // 跳转加群链接
    };
  },
  actions: {
    changeMode() {
      this.darkMode = !this.darkMode
    },
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
