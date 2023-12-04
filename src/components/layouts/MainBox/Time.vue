<template>
  <div class="l-time">
    <template v-if="useSystemStore.settings.showTime">
      <p v-if="useSystemStore.settings.showDate">{{ nowDate }}</p>
      <p class="time">{{ nowTime }}</p>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import dayjs from "dayjs";
import useStore from "@/store";
const { useSystemStore } = useStore();

const getNowDate = () => {
  const weekends = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return `${dayjs().format("YYYY年MM月DD日")} ${weekends[dayjs().day()]}`;
};

const getNowTime = () => {
  return useSystemStore.settings.showSeconds ? `${dayjs().format("HH:mm:ss")}` : `${dayjs().format("HH:mm")}`;
};

const nowDate = ref(getNowDate());
const nowTime = ref(getNowTime());
let timer = null;

const runTimer = () => {
  nowDate.value = getNowDate();
  nowTime.value = getNowTime();
  timer = setInterval(() => {
    nowDate.value = getNowDate();
    nowTime.value = getNowTime();
  }, 1000);
};

watch(
  () => useSystemStore.settings.showTime,
  (newVal) => {
    timer && clearInterval(timer);
    if (newVal) {
      runTimer();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="less" scoped>
.l-time {
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-shadow: 2px 20px 28px rgb(0 0 0 / 20%);
  .time {
    font-size: 48px;
    margin-top: 4px;
    letter-spacing: 2px;
    // font-family: DS-DIGI;
  }
}
@media screen and (max-width: 640px) {
  .l-time {
    font-size: 14px;
    .time {
      font-size: 36px;
    }
  }
}
</style>
