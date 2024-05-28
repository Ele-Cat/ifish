<template>
  <div class="offwork" @click="dialogVisible = true">
    <div class="offwork-text">
      <p v-if="offTime.indexOf(':') >= 0">距离下班时间还有</p>
      <p>{{ offTime }}</p>
    </div>
    <img src="https://tucdn.wpon.cn/2024/05/28/d895272cf7406.png" alt="" />
  </div>
  <IDialog
    title="配置"
    :width="480"
    :visible="dialogVisible"
    @cancel="dialogVisible = false"
  >
    <a-form :model="formState" layout="vertical" style="padding-top: 20px">
      <a-form-item label="选择工作日">
        <a-checkable-tag
          v-for="(tag, index) in tagsData"
          :key="tag"
          v-model:checked="formState.workDays[index]"
        >
          {{ tag }}
        </a-checkable-tag>
      </a-form-item>
      <a-form-item label="上下班时间">
        <a-space>
          <a-time-picker
            v-model:value="formState.workTimeStart"
            placeholder="上班时间"
            :minute-step="10"
            format="HH:mm"
          />~
          <a-time-picker
            v-model:value="formState.workTimeEnd"
            placeholder="下班时间"
            :minute-step="10"
            format="HH:mm"
          />
        </a-space>
      </a-form-item>
    </a-form>
  </IDialog>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import dayjs from "dayjs";
import useStore from "@/store";
const { useAppStore } = useStore();
import { millisecondToHms } from "@/utils/utils";

const dialogVisible = ref(false);
const tagsData = reactive(["周日", "周一", "周二", "周三", "周四", "周五", "周六"]);
const formState = reactive({
  workDays: useAppStore.offWorkCountdown.workDays,
  workTimeStart: useAppStore.offWorkCountdown.workTimeStart
    ? dayjs(useAppStore.offWorkCountdown.workTimeStart, "HH:mm")
    : null,
  workTimeEnd: useAppStore.offWorkCountdown.workTimeEnd
    ? dayjs(useAppStore.offWorkCountdown.workTimeEnd, "HH:mm")
    : null,
});

const offTime = ref("");
let timer = null;

const clearTimer = () => {
  timer && clearInterval(timer);
};

watch(
  () => formState,
  (newVal) => {
    let offTimeRes = "点击配置";
    clearTimer();
    if (newVal.workTimeEnd) {
      useAppStore.offWorkCountdown.workTimeStart = dayjs(newVal.workTimeStart).format(
        "HH:mm"
      );
      useAppStore.offWorkCountdown.workTimeEnd = dayjs(newVal.workTimeEnd).format(
        "HH:mm"
      );
      timer = setInterval(() => {
        if (useAppStore.offWorkCountdown.workDays[dayjs().day()]) {
          if (dayjs().isBefore(dayjs(newVal.workTimeStart))) {
            offTimeRes = "还没上班呢~";
          } else if (dayjs().isAfter(dayjs(newVal.workTimeEnd))) {
            offTimeRes = "已经下班啦~";
          } else {
            const date1 = dayjs(newVal.workTimeEnd);
            const date2 = dayjs();
            offTimeRes = millisecondToHms(date1.diff(date2));
          }
        } else {
          offTimeRes = "今天是休息日~";
        }
        offTime.value = offTimeRes;
      }, 1000);
    } else {
      useAppStore.offWorkCountdown.workTimeEnd = null;
    }
    if (!newVal.workTimeStart) {
      useAppStore.offWorkCountdown.workTimeStart = null;
    }

    offTime.value = offTimeRes;
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="less" scoped>
.offwork {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 12px 0;
  .offwork-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
    color: #999;
    p {
      &:nth-of-type(2) {
        font-family: DS-DIGI;
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 2px;
        color: #000;
      }
    }
  }
  img {
    filter: brightness(1);
  }
}
.ant-tag-checkable {
  background-color: var(--grey-4);
  color: #fff;
  &.ant-tag-checkable-checked {
    background-color: var(--primary-color);
  }
}
</style>
