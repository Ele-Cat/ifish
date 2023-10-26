import { defineStore } from "pinia";

export const useMusicStore = defineStore("ifishMusic", {
  state: () => {
    return {
      visible: false,
      musicList: [],
    };
  },
  actions: {
    toggleVisible() {
      this.visible = !this.visible
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
