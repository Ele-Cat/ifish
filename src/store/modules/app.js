import { defineStore } from "pinia";
import { lists } from "@/mock/app";

export const useAppStore = defineStore("ifishApp", {
  state: () => {
    return {
      lists: lists,
      gongde: 0, // 功德
      wordGames: {
        width: 1280,
        height: 768,
      }
    };
  },
  actions: {
    addGongde() {
      this.gongde++;
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
