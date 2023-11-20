import { defineStore } from "pinia";

export const useContextMenuStore = defineStore("toolContextMenu", {
  state: () => {
    return {
      menuVisible: false, // 是否显示右键菜单
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      activeApp: {},
    };
  },
  actions: {
    // 显示右键菜单
    showContextMenu(clientX, clientY, activeApp) {
      const {innerWidth, innerHeight} = window;
      this.position = {
        top: clientY + "px",
        left: clientX + "px",
      }
      if (clientX + 88 > innerWidth) {
        this.position = {
          top: clientY + "px",
          right: 0,
        }
      }
      if (clientY + 112 > innerHeight) {
        this.position = {
          bottom: 0,
          left: clientX + "px",
        }
      }
      if (clientX + 88 > innerWidth && clientY + 112 > innerHeight) {
        this.position = {
          bottom: 0,
          right: 0,
        }
      }
      this.activeApp = activeApp;
      this.menuVisible = true;
    },
    // 隐藏右键菜单
    hideContextMenu() {
      this.activeApp = {};
      this.menuVisible = false;
    },
  },
});
