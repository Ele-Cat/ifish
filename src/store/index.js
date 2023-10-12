import { useSystemStore } from "./modules/system";

// 将store统一到一起再分发
const useStore = () => ({
  useSystemStore: useSystemStore(),
});

export default useStore