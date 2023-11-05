<template>
  <div class="l-time">
    <p>{{ nowDate }}</p>
    <p class="time">{{ nowTime }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const nowDate = computed(() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = slice2(now.getMonth() + 1);
  const date = slice2(now.getDate());
  const weekends = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const day = now.getDay();
  return `${year}年${month}月${date}日 ${weekends[day]}`;
})

const slice2 = (str) => {
  return ("00" + str).slice(-2);
}

const getNowTime = () => {
  const now = new Date();
  const hour = slice2(now.getHours());
  const minute = slice2(now.getMinutes());
  const second = slice2(now.getSeconds());
  return `${hour}:${minute}:${second}`;
}

const nowTime = ref(getNowTime());
setInterval(() => {
  nowTime.value = getNowTime();
}, 1000)
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