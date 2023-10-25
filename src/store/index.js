import { useSystemStore } from "./modules/system";
import { useAppStore } from "./modules/app";

// 将store统一到一起再分发
const useStore = () => ({
  useSystemStore: useSystemStore(),
  useAppStore: useAppStore(),
});

export default useStore