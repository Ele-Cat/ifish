import { defineStore } from "pinia";

export const useSystemStore = defineStore("ifishSystem", {
  state: () => {
    return {
      settings: {
        title: "",
        darkMode: false,
      },
      activeMenu: "home", // 当前聚焦的工具栏目
      searchType: "https://www.baidu.com",
      backgroundUrl: "",
      qqGroupLink: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914", // 跳转加群链接
    };
  },
  actions: {
    changeTitle(title) {
      this.settings.title = title;
    },
    changeMode() {
      this.settings.darkMode = !this.settings.darkMode;
      let html = document.documentElement;
      if (!this.settings.darkMode) {
        // html添加theme 属性值
        html.setAttribute("theme", "");
      } else {
        // html添加theme 属性值
        html.setAttribute("theme", "dark");
      }
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
