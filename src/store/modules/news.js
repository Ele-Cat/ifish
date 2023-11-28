import { defineStore } from "pinia";
import { newsList } from "@/mock/news";

export const useNewsStore = defineStore("ifishNews", {
  state: () => {
    return {
      lists: newsList,
    };
  },
  actions: {
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
