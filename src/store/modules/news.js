import { defineStore } from "pinia";
import { newsList } from "@/mock/news";
import eventBus from "@/utils/eventBus";

export const useNewsStore = defineStore("ifishNews", {
  state: () => {
    return {
      lists: newsList,
    };
  },
  actions: {
    reset() {
      this.lists = newsList;
      eventBus.emit("resetNews")
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
