import { defineStore } from "pinia";
import axios from 'axios';
import { toast } from "@/utils/feedback";
import { version } from "@/utils/utils";
import _ from "lodash";

const settings = {
  title: "",
  darkMode: false,
  showTime: true,
  showDate: true,
  showSeconds: true,
  appRadius: 8,
  wallpaper: {
    key: "Ctrl + E",
    mask: 8,
    blur: 0,
    // url: "https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg",
    url: "https://bing.img.run/rand.php",
    type: "basic",
    pure: [],
    angle: 0,
    actionList: [
      {
        // 输出分类id[36(4K专区)|6(美女模特)|30(爱情美图)|9(风景大片)|15(小清新)|26(动漫卡通)|11(明星风尚)|14(萌宠动物)|5(游戏壁纸)|12(汽车天下)|10(炫酷时尚)|29(月历壁纸)|7(影视剧照)|13(节日美图)|22(军事天地)|16(劲爆体育)|18(BABY秀)|35(文字控)]
        label: "必应",
        value: "bing",
        url: "https://bing.img.run/rand.php?type=json",
        return: 'pic',
      },
      {
        label: "360",
        value: "360",
        url: "https://api.7585.net.cn/360/api.php?return=json",
        return: 'imgurl',
      }
    ],
    action: "bing",
  },
  lock: {
    key: "Ctrl + L",
    target: "_self",
    actionList: [
      "https://www.baidu.com",
    ],
    action: "https://www.baidu.com",
  },
};

export const useSystemStore = defineStore("ifishSystem", {
  state: () => {
    return {
      settings: _.cloneDeep(settings),
      activeMenu: "home", // 当前聚焦的工具栏目
      searchType: "https://www.baidu.com",
      backgroundUrl: "",
      qqGroupLink: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914", // 跳转加群链接
      platform: "win",
      version: version,
    };
  },
  actions: {
    changeTitle(title) {
      this.settings.title = title;
    },
    lock() {
      window.open(this.settings.lock.action, this.settings.lock.target);
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
    randomWallpaper() {
      // https://api.lolimi.cn/?action=doc&id=98
      // https://api.lolimi.cn/API/360bz/api.php?type=text
      const action = this.settings.wallpaper.actionList.find(action => action.value === this.settings.wallpaper.action)
      axios.get(action.url).then(res => {
        toast({
          content: "壁纸切换成功！",
        });
        this.settings.wallpaper.url = res.data[action.return];
        this.settings.wallpaper.type = "basic";
      })
    },
    getPlatform() {
      let platform = window.navigator.platform;
      if (platform.toLowerCase().indexOf('win') !== -1) {
        this.platform = "win"
      } else if (platform.toLowerCase().indexOf('mac') !== -1) {
        this.platform = "mac"
      } else {
        console.log('当前操作系统不是 Windows 也不是 macOS');
      }
    },
    ctrlOrCommand() {
      return this.platform === "win" ? "Ctrl" : "⌘";
    },
    reset() {
      console.log('reset', settings);
      this.settings = settings;
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
