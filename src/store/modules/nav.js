import { defineStore } from "pinia";
import lists from "@/mock/nav";

export const useNavStore = defineStore("ifishNav", {
  state: () => {
    return {
      lists: lists,
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
