import { defineStore } from "pinia";
import { toast } from "@/utils/feedback";

export const useMusicStore = defineStore("ifishMusic", {
  state: () => {
    return {
      visible: false,
      settings: {
        playing: false,
        mute: false,
        volume: 80,
        mode: "listCycle", // listCycle列表循环 singleCycle单曲循环 randomPlay随机播放
      },
      musicList: [],
      activeMusic: {},
      activeIndex: -1,
      searchHistory: [],
    };
  },
  actions: {
    toggleVisible() {
      this.visible = !this.visible
    },
    changeMode(mode) {
      this.settings.mode = mode;
      const modes = {
        listCycle: "列表循环",
        singleCycle: "单曲循环",
        randomPlay: "随机播放"
      }
      toast({
        content: `已切换为${modes[mode]}模式`
      })
    },
    toggleMute(flag) {
      this.settings.mute = !this.settings.mute;
      if (flag && this.settings.volume === 0) {
        this.settings.mute = false;
        this.settings.volume = 20;
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
