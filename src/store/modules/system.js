import { defineStore } from "pinia";

export const useSystemStore = defineStore("ifishSystem", {
  state: () => {
    return {
      settings: {
        title: "",
        darkMode: false,
        appRadius: 8,
        wallpaper: {
          blur: 0,
          mask: 0,
          url: "https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg",
          type: "image",
        },
        lock: {
          key: "Ctrl + L",
          target: "_self",
          actionList: [
            "https://www.baidu.com",
          ],
          action: "https://www.baidu.com",
        },
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
    lock() {
      window.open(this.settings.lock.action, this.settings.lock.target);
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
