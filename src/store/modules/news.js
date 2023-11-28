import { defineStore } from "pinia";
import { newsList } from "@/mock/news";

export const useNewsStore = defineStore("ifishNews", {
  state: () => {
    return {
      lists: newsList.map(item => {
        return {
          label: item,
          value: item,
          visible: true,
        }
      }),
      activeNews: 0,
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
