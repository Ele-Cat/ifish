import { useSystemStore } from "@/store/modules/system";
import { useMusicStore } from "@/store/modules/music";
import eventBus from '@/utils/eventBus';

const ctrlKey = 17,
  commandKey = 91, // mac command
  lKey = 76, // 锁定l
  eKey = 69, // 背景e
  qKey = 81, // 暗黑模式q
  spaceKey = 32, // 空格 播放/暂停
  leftKey = 37, // 空格 播放/暂停
  rightKey = 39; // 空格 播放/暂停


// 把这几个的Ctrl+组合键屏蔽掉，影响体验，具体看本文件底部的keyCodes键盘字典
const ignoreKeyMap = [73, 77, 79, 80, 83, 85];
// i, m, o, p, s, u

const keymap = {
  [lKey]: lock,
  [eKey]: randomWallpaper,
  [qKey]: darkMode,
  [leftKey]: prevMusic,
  [rightKey]: nextMusic,
};

let isCtrlOrCommandDown = false;
// 全局监听按键操作并执行相应命令
export function listenGlobalKeyDown() {
  window.onkeydown = (e) => {
    const { keyCode } = e;
    if (keyCode === spaceKey) {
      playOrPause();
    } else if (keyCode === ctrlKey || keyCode === commandKey) {
      // 按下Ctrl || Command
      isCtrlOrCommandDown = true;
    } else if (isCtrlOrCommandDown) {
      if (ignoreKeyMap.includes(keyCode)) {
        // 移除ignoreKeyMap的默认事件
        e.preventDefault();
      }
      if (keymap[keyCode]) {
        // 执行
        e.preventDefault();
        keymap[keyCode]();
      }
    }
  };

  // 键盘抬起
  window.onkeyup = (e) => {
    if (e.keyCode === ctrlKey || e.keyCode === commandKey) {
      isCtrlOrCommandDown = false;
    }
  };

  // 监听鼠标滑轮滚动
  window.addEventListener('wheel', e => {
    if (e.ctrlKey) {
      // 禁止鼠标滚轮缩放浏览器事件
      e.preventDefault();
    }
  }, { passive: false })
}

// 执行锁屏
function lock() {
  useSystemStore().lock();
}

// 暗黑模式
function darkMode() {
  useSystemStore().changeMode();
}

// 随机背景
function randomWallpaper() {
  useSystemStore().randomWallpaper();
}

// 播放/暂停
function playOrPause() {
  eventBus.emit("playOrPause");
};
// 上一首
function prevMusic() {
  eventBus.emit("prevMusic");
};
// 下一首
function nextMusic() {
  eventBus.emit("nextMusic");
};

// 键盘按键字典
const keyCodes = {
  // 功能键
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  capsLock: 20,
  escape: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
  insert: 45,
  delete: 46,

  // 数字键（主键盘区域）
  num0: 48,
  num1: 49,
  num2: 50,
  num3: 51,
  num4: 52,
  num5: 53,
  num6: 54,
  num7: 55,
  num8: 56,
  num9: 57,

  // 字母键（主键盘区域）
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,

  // 功能键（F1-F12）
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,

  // 数字键盘区域
  numLock: 144,
  divide: 111,
  multiply: 106,
  subtract: 109,
  add: 107,
  decimalPoint: 110,
  numpad0: 96,
  numpad1: 97,
  numpad2: 98,
  numpad3: 99,
  numpad4: 100,
  numpad5: 101,
  numpad6: 102,
  numpad7: 103,
  numpad8: 104,
  numpad9: 105,
};