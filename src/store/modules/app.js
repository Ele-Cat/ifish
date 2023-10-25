import { defineStore } from "pinia";

export const useAppStore = defineStore("ifishApp", {
  state: () => {
    return {
      gongde: 0, // 功德
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
