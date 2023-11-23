import { defineStore } from "pinia";
import { appList } from "@/mock/app";

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
        width: 880,
        height: 560,
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
