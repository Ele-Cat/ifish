import { defineStore } from "pinia";

export const useNavStore = defineStore("ifishNav", {
  state: () => {
    return {
      active: [0, 0],
    };
  },
  actions: {
    toggleActive(l, t) {
      this.active = [l, t];
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
