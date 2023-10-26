import { useSystemStore } from "./modules/system";
import { useAppStore } from "./modules/app";
import { useMusicStore } from "./modules/music";

// 将store统一到一起再分发
const useStore = () => ({
  useSystemStore: useSystemStore(),
  useAppStore: useAppStore(),
  useMusicStore: useMusicStore(),
});

export default useStore