import { useAppStore } from "./modules/app";
import { useNavStore } from "./modules/nav";
import { useNewsStore } from "./modules/news";
import { useContextMenuStore } from "./modules/contextMenu";
import { useMusicStore } from "./modules/music";
import { useSystemStore } from "./modules/system";

// 将store统一到一起再分发
const useStore = () => ({
  useAppStore: useAppStore(),
  useNavStore: useNavStore(),
  useNewsStore: useNewsStore(),
  useContextMenuStore: useContextMenuStore(),
  useMusicStore: useMusicStore(),
  useSystemStore: useSystemStore(),
});

export default useStore