import { defineStore } from "pinia";
import { appList } from "@/mock/app";
import dayjs from 'dayjs';

export const useAppStore = defineStore("ifishApp", {
  state: () => {
    return {
      lists: appList,
      gongde: 0, // 功德
      wordGames: {
        width: 1280,
        height: 768,
      },
      miniGames: {
        width: 980,
        height: 640,
      },
      offWorkCountdown: {
        workDays: [false, true, true, true, true, true, false],
        workTimeStart: "08:30",
        workTimeEnd: "17:30",
      },
    };
  },
  actions: {
    addGongde() {
      this.gongde++;
    },
    reset() {
      this.lists = appList;
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
